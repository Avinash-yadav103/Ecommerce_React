import { useState, useEffect } from "react"
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad, ChevronLeft, ChevronRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
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
]

export default function CategorySection() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState(null)
  const [visibleCategories, setVisibleCategories] = useState(categories)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  
  // Number of items to display based on screen size
  const itemsPerView = window.innerWidth > 768 ? 6 : window.innerWidth > 480 ? 4 : 3
  
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
      updateVisibleCategories(currentIndex - 1)
    }
  }
  
  const handleNextClick = () => {
    if (currentIndex + itemsPerView < categories.length) {
      setCurrentIndex(currentIndex + 1)
      updateVisibleCategories(currentIndex + 1)
    }
  }
  
  const updateVisibleCategories = (startIndex) => {
    setVisibleCategories(categories.slice(startIndex, startIndex + itemsPerView))
  }
  
  // Update visible categories when itemsPerView changes (responsive)
  useEffect(() => {
    updateVisibleCategories(currentIndex)
  }, [itemsPerView])

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
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button 
            className={`${styles.navButton} ${currentIndex + itemsPerView >= categories.length ? styles.disabled : ''}`}
            onClick={handleNextClick}
            whileHover={currentIndex + itemsPerView < categories.length ? { scale: 1.1, backgroundColor: "#db4444", color: "white" } : {}}
            whileTap={currentIndex + itemsPerView < categories.length ? { scale: 0.9 } : {}}
            disabled={currentIndex + itemsPerView >= categories.length}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>

      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <Link 
            to={category.path} 
            key={category.name} 
            className={styles.categoryLink}
          >
            <motion.div 
              className={`${styles.categoryCard} ${activeCategory === index ? styles.active : ""}`}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                borderColor: "#db4444"
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <motion.div 
                className={styles.iconWrapper}
                animate={hoveredCategory === index ? { 
                  rotate: [0, -10, 10, -5, 5, 0],
                  scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
                } : {}}
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.div>
              <span>{category.name}</span>
              
              {hoveredCategory === index && (
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
        ))}
      </div>
    </section>
  )
}

