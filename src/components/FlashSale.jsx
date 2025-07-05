import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Eye, Star, ShoppingCart } from 'lucide-react';
import styles from './FlashSale.module.css';

const flashProducts = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?fit=crop&w=300&h=300"
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?fit=crop&w=300&h=300"
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fit=crop&w=300&h=300"
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 50,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?fit=crop&w=300&h=300"
  }
];

export default function FlashSale() {
  // State for the countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });
  
  // State for product hover and slider
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsPerView = window.innerWidth > 1024 ? 4 : window.innerWidth > 768 ? 3 : 2;
  const totalSlides = Math.ceil(flashProducts.length / productsPerView);
  
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  
  // Effect for countdown timer
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
      } else if (timeLeft.days > 0) {
        setTimeLeft({ ...timeLeft, days: timeLeft.days - 1, hours: 23, minutes: 59, seconds: 59 });
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [timeLeft]);
  
  // Touch events for mobile swipe
  const touchStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
  };
  
  const touchMove = (e) => {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      const translate = prevTranslate + currentPosition - startPos;
      setCurrentTranslate(translate);
      
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${translate}px)`;
      }
    }
  };
  
  const touchEnd = () => {
    setIsDragging(false);
    const threshold = 100;
    const diff = currentTranslate - prevTranslate;
    
    // Calculate grid item width + gap
    const itemWidth = sliderRef.current ? sliderRef.current.children[0].offsetWidth + 30 : 300;
    
    if (diff < -threshold && currentSlide < totalSlides - 1) {
      // Swipe right
      goToSlide(currentSlide + 1);
    } else if (diff > threshold && currentSlide > 0) {
      // Swipe left
      goToSlide(currentSlide - 1);
    } else {
      // Return to current slide
      goToSlide(currentSlide);
    }
  };
  
  const getPositionX = (e) => {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  };
  
  const goToSlide = (slideIndex) => {
    if (slideIndex < 0) slideIndex = 0;
    if (slideIndex >= totalSlides) slideIndex = totalSlides - 1;
    
    setCurrentSlide(slideIndex);
    const translate = -slideIndex * productsPerView * (sliderRef.current ? sliderRef.current.children[0].offsetWidth + 30 : 300);
    setCurrentTranslate(translate);
    setPrevTranslate(translate);
    
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.3s ease';
      sliderRef.current.style.transform = `translateX(${translate}px)`;
    }
  };
  
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };
  
  const handleAddToCart = (productId) => {
    console.log(`Added product ${productId} to cart`);
    // Add your cart logic here
  };
  
  return (
    <section className={styles.section} data-aos="fade-up">
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.indicator}></div>
          <h2>Today's</h2>
        </div>
        <div className={styles.headerContent}>
          <h1>Flash Sales</h1>
          <div className={styles.timerNavigation}>
            <div className={styles.timer}>
              <motion.div 
                className={styles.timerUnit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Days</span>
              </motion.div>
              <span className={styles.timerSeparator}>:</span>
              <motion.div 
                className={styles.timerUnit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Hours</span>
              </motion.div>
              <span className={styles.timerSeparator}>:</span>
              <motion.div 
                className={styles.timerUnit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Minutes</span>
              </motion.div>
              <span className={styles.timerSeparator}>:</span>
              <motion.div 
                className={styles.timerUnit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Seconds</span>
              </motion.div>
            </div>
            <div className={styles.navigation}>
              <motion.button 
                className={`${styles.navButton} ${currentSlide === 0 ? styles.disabled : ''}`}
                onClick={prevSlide}
                whileHover={currentSlide > 0 ? { scale: 1.1, backgroundColor: "#db4444", color: "white", borderColor: "#db4444" } : {}}
                whileTap={currentSlide > 0 ? { scale: 0.9 } : {}}
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button 
                className={`${styles.navButton} ${currentSlide === totalSlides - 1 ? styles.disabled : ''}`}
                onClick={nextSlide}
                whileHover={currentSlide < totalSlides - 1 ? { scale: 1.1, backgroundColor: "#db4444", color: "white", borderColor: "#db4444" } : {}}
                whileTap={currentSlide < totalSlides - 1 ? { scale: 0.9 } : {}}
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={styles.sliderContainer}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
        onMouseDown={touchStart}
        onMouseMove={isDragging ? touchMove : null}
        onMouseUp={touchEnd}
        onMouseLeave={isDragging ? touchEnd : null}
      >
        <motion.div 
          ref={sliderRef}
          className={styles.productGrid}
          initial={{ x: 0 }}
        >
          {flashProducts.map((product) => (
            <motion.div
              key={product.id}
              className={styles.productCard}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div className={styles.imageContainer}>
                {product.discount && <span className={styles.discountTag}>-{product.discount}%</span>}
                <div className={styles.overlay}>
                  <motion.button 
                    className={styles.wishlist}
                    whileHover={{ scale: 1.1, backgroundColor: "#db4444", color: "white" }}
                    whileTap={{ scale: 0.9 }}
                    title="Add to wishlist"
                  >
                    <Heart size={18} />
                  </motion.button>
                  <motion.button 
                    className={styles.quickView}
                    whileHover={{ scale: 1.1, backgroundColor: "#db4444", color: "white" }}
                    whileTap={{ scale: 0.9 }}
                    title="Quick view"
                  >
                    <Eye size={18} />
                  </motion.button>
                </div>
                <Link to={`/product/${product.id}`}>
                  <motion.div className={styles.imageWrapper}>
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.div>
                </Link>
                
                <AnimatePresence>
                  {hoveredProduct === product.id && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className={styles.addToCartButton}
                      onClick={() => handleAddToCart(product.id)}
                      whileHover={{ backgroundColor: "#c13838" }}
                    >
                      <ShoppingCart size={18} style={{ marginRight: 8 }} /> Add To Cart
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              
              <div className={styles.details}>
                <Link to={`/product/${product.id}`} className={styles.productLink}>
                  <h3>{product.name}</h3>
                </Link>
                <div className={styles.priceRating}>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>${product.price}</span>
                    {product.originalPrice && (
                      <span className={styles.originalPrice}>${product.originalPrice}</span>
                    )}
                  </div>
                  <div className={styles.rating}>
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          fill={index < Math.floor(product.rating) ? 'currentColor' : 'none'}
                          stroke={index < Math.floor(product.rating) ? 'currentColor' : 'currentColor'}
                          className={
                            index < product.rating
                              ? styles.starFilled
                              : styles.starEmpty
                          }
                        />
                      ))}
                    <span className={styles.reviews}>({product.reviews})</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className={styles.progressContainer}>
        {Array(totalSlides).fill().map((_, index) => (
          <motion.button
            key={index}
            className={`${styles.progressDot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={index === currentSlide ? { scale: 1.2 } : { scale: 1 }}
          />
        ))}
      </div>

      <div className={styles.viewAllContainer}>
        <motion.button 
          className={styles.viewAll}
          whileHover={{ scale: 1.05, backgroundColor: "#c13838" }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          View All Products
        </motion.button>
      </div>
    </section>
  );
}