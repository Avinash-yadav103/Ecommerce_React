import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ShoppingBag, 
  Smartphone, 
  Watch, 
  Home as HomeIcon, 
  Pill, 
  Activity, 
  Baby, 
  ShoppingCart, 
  Heart,
  Search,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);

  const categories = [
    {
      name: "Woman's Fashion",
      icon: <ShoppingBag size={18} />,
      path: "/category/womans-fashion",
      subcategories: ["Clothing", "Shoes", "Jewelry", "Watches", "Handbags"]
    },
    {
      name: "Men's Fashion",
      icon: <ShoppingBag size={18} />,
      path: "/category/mens-fashion",
      subcategories: ["Clothing", "Shoes", "Accessories", "Watches", "Formal Wear"]
    },
    { 
      name: "Electronics", 
      icon: <Smartphone size={18} />,
      path: "/category/electronics",
      subcategories: ["Smartphones", "Laptops", "Tablets", "Cameras", "Audio"] 
    },
    { 
      name: "Home & Lifestyle", 
      icon: <HomeIcon size={18} />,
      path: "/category/home-lifestyle",
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting"]
    },
    { 
      name: "Medicine", 
      icon: <Pill size={18} />,
      path: "/category/medicine",
      subcategories: ["Prescription", "OTC", "Supplements", "First Aid"]
    },
    { 
      name: "Sports & Outdoor", 
      icon: <Activity size={18} />,
      path: "/category/sports-outdoor",
      subcategories: ["Fitness", "Outdoor", "Team Sports", "Water Sports"]
    },
    { 
      name: "Baby's & Toys", 
      icon: <Baby size={18} />,
      path: "/category/babies-toys",
      subcategories: ["Clothing", "Gear", "Toys", "Feeding", "Diapering"]
    },
    { 
      name: "Groceries & Pets", 
      icon: <ShoppingCart size={18} />,
      path: "/category/groceries-pets",
      subcategories: ["Food", "Beverages", "Pet Food", "Pet Supplies"]
    },
    { 
      name: "Health & Beauty", 
      icon: <Heart size={18} />,
      path: "/category/health-beauty",
      subcategories: ["Skincare", "Makeup", "Haircare", "Fragrance", "Personal Care"]
    },
  ];

  // Filter categories based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = categories.filter(
        category => category.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchQuery, categories]);

  const toggleCategory = (index, e) => {
    // Prevent the Link component from navigating when clicking the toggle button
    if (e) {
      e.stopPropagation();
    }
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (isSearchActive) {
      setSearchQuery('');
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <motion.aside 
      className="sidebar"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="sidebar-header">
        <h3 className="sidebar-title">Categories</h3>
        <motion.button
          className="search-toggle"
          onClick={toggleSearch}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isSearchActive ? <X size={18} /> : <Search size={18} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isSearchActive && (
          <motion.div 
            className="search-container"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav className="category-nav">
        <AnimatePresence>
          {filteredCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              custom={index}
              variants={categoryVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              layout
            >
              <Link to={category.path} className="category-link">
                <motion.div 
                  className={`category-item ${expandedCategory === index ? 'active' : ''} ${hoveredItem === index ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileHover={{ 
                    backgroundColor: "rgba(219, 68, 68, 0.05)",
                    paddingLeft: "8px",
                  }}
                  transition={{ duration: 0.2 }}
                  layout
                >
                  <div className="category-content">
                    <motion.div 
                      className="category-icon"
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <span>{category.name}</span>
                  </div>
                  
                  {category.subcategories && (
                    <motion.div 
                      className="toggle-button"
                      animate={{ rotate: expandedCategory === index ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => toggleCategory(index, e)}
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  )}
                </motion.div>
              </Link>

              <AnimatePresence>
                {category.subcategories && expandedCategory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="subcategories"
                  >
                    {category.subcategories.map((sub, subIndex) => (
                      <motion.div 
                        key={subIndex}
                        className="subcategory-item"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: subIndex * 0.05, duration: 0.2 }}
                        whileHover={{ 
                          backgroundColor: "rgba(219, 68, 68, 0.05)",
                          color: "#db4444",
                          x: 5
                        }}
                      >
                        <Link to={`/category/${sub.toLowerCase().replace(/\s+/g, '-')}`}>
                          {sub}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>

        {searchQuery && filteredCategories.length === 0 && (
          <motion.div 
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No categories found
          </motion.div>
        )}
      </motion.nav>
    </motion.aside>
  );
}

export default Sidebar;