import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, ShoppingBag, Smartphone, Watch, Home, Pills, Activity, Baby, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // We'll create this file next

function Sidebar() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const categories = [
    {
      name: "Woman's Fashion",
      icon: <ShoppingBag size={18} />,
      subcategories: ["Clothing", "Shoes", "Jewelry", "Watches", "Handbags"]
    },
    {
      name: "Men's Fashion",
      icon: <ShoppingBag size={18} />,
      subcategories: ["Clothing", "Shoes", "Accessories", "Watches", "Formal Wear"]
    },
    { name: "Electronics", icon: <Smartphone size={18} /> },
    { name: "Home & Lifestyle", icon: <Home size={18} /> },
    { name: "Medicine", icon: <Pills size={18} /> },
    { name: "Sports & Outdoor", icon: <Activity size={18} /> },
    { name: "Baby's & Toys", icon: <Baby size={18} /> },
    { name: "Groceries & Pets", icon: <ShoppingCart size={18} /> },
    { name: "Health & Beauty", icon: <Heart size={18} /> },
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <motion.aside 
      className="sidebar"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="sidebar-title">Categories</h3>
      <nav>
        {categories.map((category, index) => (
          <div key={index}>
            <motion.div 
              className={`category-item ${expandedCategory === index ? 'active' : ''} ${hoveredItem === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => toggleCategory(index)}
              whileHover={{ 
                backgroundColor: "rgba(219, 68, 68, 0.05)",
                paddingLeft: "8px",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="category-content">
                <motion.div className="category-icon">
                  {category.icon}
                </motion.div>
                <span>{category.name}</span>
              </div>
              {category.subcategories && (
                <motion.div 
                  animate={{ rotate: expandedCategory === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              )}
            </motion.div>

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
                      whileHover={{ 
                        backgroundColor: "rgba(219, 68, 68, 0.05)",
                        color: "#db4444",
                        x: 5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to={`/category/${sub.toLowerCase().replace(/\s+/g, '-')}`}>
                        {sub}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
}

export default Sidebar;