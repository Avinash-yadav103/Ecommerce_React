import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: "New Arrivals",
    subtitle: "Collection 2025",
    description: "Discover our latest fashion pieces curated for the modern lifestyle",
    buttonText: "Shop Now",
    image: "https://images.unsplash.com/photo-1588776813677-6a0b6b159275?auto=format&fit=crop&q=80",
    color: "#121212",
    path: "/category/new-arrivals"
  },
  {
    id: 2,
    title: "Summer Essentials",
    subtitle: "Hot Deals",
    description: "Up to 50% off on selected summer items",
    buttonText: "View Collection",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80",
    color: "#6a1b9a",
    path: "/category/summer-sale"
  },
  {
    id: 3,
    title: "Tech Gadgets",
    subtitle: "Latest Technology",
    description: "Explore cutting-edge electronics and accessories",
    buttonText: "Discover More",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80",
    color: "#1e3a8a",
    path: "/category/electronics"
  }
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const autoPlayRef = useRef(null);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    intervalRef.current = setInterval(play, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => autoPlayRef.current(), 6000);
  };

  // Variants for slide animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div 
      className="hero-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="slide"
          style={{ 
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundColor: slides[currentSlide].color
          }}
        >
          <div className="slide-content">
            <motion.span 
              className="slide-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.span>
            
            <motion.h1 
              className="slide-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p 
              className="slide-description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                to={slides[currentSlide].path}
                className="slide-button"
              >
                {slides[currentSlide].buttonText} <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="navigation-buttons">
        <motion.button 
          className="nav-btn prev"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={20} />
        </motion.button>
        <motion.button 
          className="nav-btn next"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight size={20} />
        </motion.button>
      </div>

      <div className="dots-container">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={index === currentSlide ? { scale: 1.2 } : { scale: 1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;