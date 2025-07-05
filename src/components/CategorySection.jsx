import { useState, useEffect } from "react"
import { 
  Smartphone, 
  Monitor, 
  Watch, 
  Camera, 
  Headphones, 
  Gamepad, 
  ChevronLeft, 
  ChevronRight, 
  Home as HomeIcon,
  Shirt,
  BookOpen,
  ShoppingBag,
  Utensils,
  Car,
  Apple,
  Dumbbell
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./CategorySection.module.css"

const categories = [
  { 
    icon: <Smartphone size={32} />, 
    name: "Phones", 
    path: "/category/phones",
    description: "Smartphones, feature phones, and mobile accessories."
  },
  { 
    icon: <Monitor size={32} />, 
    name: "Computers", 
    path: "/category/computers",
    description: "Laptops, desktops, and computer components."
  },
  { 
    icon: <Watch size={32} />, 
    name: "SmartWatch", 
    path: "/category/smartwatch",
    description: "Fitness trackers and smart wearables."
  },
  { 
    icon: <Camera size={32} />, 
    name: "Camera", 
    path: "/category/camera",
    description: "Digital cameras, DSLRs, and photography gear."
  },
  { 
    icon: <Headphones size={32} />, 
    name: "HeadPhones", 
    path: "/category/headphones",
    description: "Over-ear, in-ear headphones and audio equipment."
  },
  { 
    icon: <Gamepad size={32} />, 
    name: "Gaming", 
    path: "/category/gaming",
    description: "Gaming consoles, controllers, and accessories."
  },
  // New categories
  { 
    icon: <HomeIcon size={32} />, 
    name: "Home Appliances", 
    path: "/category/home-appliances",
    description: "Kitchen, living room, and household electronics."
  },
  { 
    icon: <Shirt size={32} />, 
    name: "Fashion", 
    path: "/category/fashion",
    description: "Clothing, shoes, and accessories for all ages."
  },
  { 
    icon: <BookOpen size={32} />, 
    name: "Books", 
    path: "/category/books",
    description: "Books, e-books, and stationery products."
  },
  { 
    icon: <ShoppingBag size={32} />, 
    name: "Beauty", 
    path: "/category/beauty",
    description: "Makeup, skincare, and personal care products."
  },
  { 
    icon: <Utensils size={32} />, 
    name: "Kitchen", 
    path: "/category/kitchen",
    description: "Cookware, utensils, and kitchen gadgets."
  },
  { 
    icon: <Car size={32} />, 
    name: "Automotive", 
    path: "/category/automotive",
    description: "Car accessories, parts, and maintenance tools."
  },
  { 
    icon: <Apple size={32} />, 
    name: "Groceries", 
    path: "/category/groceries",
    description: "Fresh produce, pantry items, and food products."
  },
  { 
    icon: <Dumbbell size={32} />, 
    name: "Fitness", 
    path: "/category/fitness",
    description: "Exercise equipment and fitness accessories."
  }
]

export default function CategorySection() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState(null)
  const [visibleCategories, setVisibleCategories] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  
  // Number of items to display based on screen size
  const [itemsPerView, setItemsPerView] = useState(6)
  
  // Update itemsPerView on window resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = window.innerWidth > 1200 ? 6 
        : window.innerWidth > 768 ? 4 
        : window.innerWidth > 480 ? 3 
        : 2;
      setItemsPerView(newItemsPerView);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine if a category is active based on the current URL path
  useEffect(() => {
    const currentPath = location.pathname
    const activeIndex = categories.findIndex(category => 
      currentPath.includes(category.path.split('/').pop())
    )
    
    setActiveCategory(activeIndex !== -1 ? activeIndex : null)
  }, [location])
  
  // Handle navigation clicks
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  
  const handleNextClick = () => {
    if (currentIndex + itemsPerView < categories.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  
  // Update visible categories when itemsPerView or currentIndex changes
  useEffect(() => {
    setVisibleCategories(categories.slice(currentIndex, currentIndex + itemsPerView))
  }, [itemsPerView, currentIndex])

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.indicator}></div>
          <h2>Categories</h2>
        </div>
        <h1>Browse By Category</h1>
        <div className={styles.navigation}>
          <motion.button 
            className={`${styles.navButton} ${currentIndex === 0 ? styles.disabled : ''}`}
            onClick={handlePrevClick}
            whileHover={currentIndex > 0 ? { scale: 1.1, backgroundColor: "#db4444", color: "white" } : {}}
            whileTap={currentIndex > 0 ? { scale: 0.9 } : {}}
            disabled={currentIndex === 0}
            aria-label="Previous categories"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button 
            className={`${styles.navButton} ${currentIndex + itemsPerView >= categories.length ? styles.disabled : ''}`}
            onClick={handleNextClick}
            whileHover={currentIndex + itemsPerView < categories.length ? { scale: 1.1, backgroundColor: "#db4444", color: "white" } : {}}
            whileTap={currentIndex + itemsPerView < categories.length ? { scale: 0.9 } : {}}
            disabled={currentIndex + itemsPerView >= categories.length}
            aria-label="Next categories"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>

      <div className={styles.categoryGrid}>
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((category, index) => (
            <motion.div
              key={category.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={styles.categoryWrapper}
            >
              <Link 
                to={category.path} 
                className={styles.categoryLink}
                onClick={(e) => {
                  // Add any tracking or analytics here if needed
                  console.log(`Navigating to ${category.name} category`);
                }}
              >
                <motion.div 
                  className={`${styles.categoryCard} ${activeCategory === currentIndex + index ? styles.active : ""}`}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    borderColor: "#db4444"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredCategory(currentIndex + index)}
                  onHoverEnd={() => setHoveredCategory(null)}
                >
                  <motion.div 
                    className={styles.iconWrapper}
                    animate={hoveredCategory === currentIndex + index ? { 
                      rotate: [0, -10, 10, -5, 5, 0],
                      scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <span className={styles.categoryName}>{category.name}</span>
                  
                  <motion.span 
                    className={styles.viewCategory}
                    initial={{ opacity: 0 }}
                    animate={hoveredCategory === currentIndex + index ? { opacity: 1 } : { opacity: 0 }}
                  >
                    View Category
                  </motion.span>
                  
                  {hoveredCategory === currentIndex + index && (
                    <motion.div 
                      className={styles.tooltip}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.description}
                    </motion.div>
                  )}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Page indicator dots */}
      <div className={styles.paginationDots}>
        {Array.from({ length: Math.ceil(categories.length / itemsPerView) }).map((_, i) => (
          <motion.button
            key={i}
            className={`${styles.paginationDot} ${i === Math.floor(currentIndex / itemsPerView) ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(i * itemsPerView)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  )
}

