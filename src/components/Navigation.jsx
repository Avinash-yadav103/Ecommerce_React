import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import './Navigation.css'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <div className="announcement-bar">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <Link to="#">ShopNow</Link>
        </p>
      </div>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Exclusive
            </motion.div>
          </Link>

          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <motion.div
              whileHover={{ scale: 1.1, color: '#db4444' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/">Home</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, color: '#db4444' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about">About</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, color: '#db4444' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">Contact</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, color: '#db4444' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/sign-up">Sign Up</Link>
            </motion.div>
          </nav>

          <div className="search-cart">
            <div className="search-box">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="search-input"
              />
              <Search size={18} className="search-icon" />
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/wishlist" className="icon-button">
                <Heart size={20} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/cart" className="icon-button">
                <ShoppingCart size={20} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/account" className="icon-button">
                <User size={20} />
              </Link>
            </motion.div>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navigation