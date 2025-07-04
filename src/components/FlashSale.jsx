import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Eye, Star } from 'lucide-react';
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
  
  // State for product hover
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
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
              <div className={styles.timerUnit}>
                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Days</span>
              </div>
              <span className={styles.timerSeparator}>:</span>
              <div className={styles.timerUnit}>
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Hours</span>
              </div>
              <span className={styles.timerSeparator}>:</span>
              <div className={styles.timerUnit}>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Minutes</span>
              </div>
              <span className={styles.timerSeparator}>:</span>
              <div className={styles.timerUnit}>
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className={styles.timerLabel}>Seconds</span>
              </div>
            </div>
            <div className={styles.navigation}>
              <motion.button 
                className={styles.navButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button 
                className={styles.navButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productGrid}>
        {flashProducts.map((product) => (
          <motion.div
            key={product.id}
            className={styles.productCard}
            onHoverStart={() => setHoveredProduct(product.id)}
            onHoverEnd={() => setHoveredProduct(null)}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay={(product.id % 4) * 100}
          >
            <div className={styles.imageContainer}>
              {product.discount && <span className={styles.discountTag}>-{product.discount}%</span>}
              <div className={styles.overlay}>
                <motion.button 
                  className={styles.wishlist}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={18} />
                </motion.button>
                <motion.button 
                  className={styles.quickView}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Eye size={18} />
                </motion.button>
              </div>
              <Link to={`/product/${product.id}`}>
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                  whileHover={{ scale: 1.05 }}
                />
              </Link>
              {hoveredProduct === product.id && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.addToCartButton}
                >
                  Add To Cart
                </motion.button>
              )}
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
      </div>

      <div className={styles.viewAllContainer}>
        <motion.button 
          className={styles.viewAll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Products
        </motion.button>
      </div>
    </section>
  );
}