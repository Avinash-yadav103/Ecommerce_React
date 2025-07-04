import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import HomeSlider from "../components/HomeSlider";
import ProductSection from '../components/ProductSection';
import CategorySection from '../components/CategorySection';
import ProductExplorer from '../components/ProductExplorer';
import NewArrival from "../components/NewArrival";
import FlashSale from "../components/FlashSale";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sidebar />
          </motion.div>

          <motion.div 
            style={{ flex: 1 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="hero-section" data-aos="fade-up">
              <HomeSlider />
            </div>
          </motion.div>
        </div>

        <FlashSale />
        <CategorySection />
        <ProductSection />
        <ProductExplorer />
        <NewArrival />
      </div>
    </motion.div>
  );
}

export default Home;