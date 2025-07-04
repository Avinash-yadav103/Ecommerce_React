import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import styles from './AboutUs.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heart, Box, Users, Star, TrendingUp, Clock } from 'lucide-react';

export default function AboutUs() {
  const storyRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Exclusive
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your premier destination for quality products and exceptional shopping experiences
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
        className={styles.story}
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <h2 data-aos="fade-up">Our Story</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Founded in 2015, Exclusive began as a small online store with a big vision: to create a 
              shopping platform that offers premium products at accessible prices. What started with a 
              small team of just five passionate individuals has grown into an international e-commerce 
              destination trusted by millions of customers worldwide.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Our journey has been guided by our commitment to quality, innovation, and customer satisfaction. 
              We've carefully curated our selection of products, partnering with trusted brands and emerging 
              designers to bring you the very best in every category.
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              Today, Exclusive stands as a testament to our founding principles. We continue to evolve 
              and expand, but our core mission remains the same: to provide exceptional products and 
              shopping experiences to customers around the globe.
            </p>
          </div>
          <div className={styles.storyImage} data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&h=800" alt="Exclusive Store" />
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className={styles.values}
        ref={valuesRef}
        initial="hidden"
        animate={valuesInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2 data-aos="fade-up">Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard} data-aos="zoom-in" data-aos-delay="100">
            <div className={styles.valueIcon}><Star /></div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from product selection to delivery.</p>
          </div>
          <div className={styles.valueCard} data-aos="zoom-in" data-aos-delay="200">
            <div className={styles.valueIcon}><Users /></div>
            <h3>Customer First</h3>
            <p>Our customers are at the heart of every decision we make.</p>
          </div>
          <div className={styles.valueCard} data-aos="zoom-in" data-aos-delay="300">
            <div className={styles.valueIcon}><Box /></div>
            <h3>Sustainability</h3>
            <p>We're committed to reducing our environmental impact and promoting sustainable practices.</p>
          </div>
          <div className={styles.valueCard} data-aos="zoom-in" data-aos-delay="400">
            <div className={styles.valueIcon}><TrendingUp /></div>
            <h3>Innovation</h3>
            <p>We continuously seek new ways to improve and enhance the shopping experience.</p>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className={styles.stats}
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className={styles.statsGrid}>
          <div className={styles.statCard} data-aos="fade-up">
            <h3>10M+</h3>
            <p>Customers Worldwide</p>
          </div>
          <div className={styles.statCard} data-aos="fade-up" data-aos-delay="100">
            <h3>45+</h3>
            <p>Countries Served</p>
          </div>
          <div className={styles.statCard} data-aos="fade-up" data-aos-delay="200">
            <h3>100K+</h3>
            <p>Products Available</p>
          </div>
          <div className={styles.statCard} data-aos="fade-up" data-aos-delay="300">
            <h3>4.8</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className={styles.team}
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2 data-aos="fade-up">Meet Our Leadership Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.memberImage}>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300" alt="CEO" />
            </div>
            <h3>David Johnson</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember} data-aos="fade-up" data-aos-delay="200">
            <div className={styles.memberImage}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300" alt="COO" />
            </div>
            <h3>Sarah Miller</h3>
            <p>Chief Operations Officer</p>
          </div>
          <div className={styles.teamMember} data-aos="fade-up" data-aos-delay="300">
            <div className={styles.memberImage}>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300" alt="CTO" />
            </div>
            <h3>Michael Chen</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className={styles.teamMember} data-aos="fade-up" data-aos-delay="400">
            <div className={styles.memberImage}>
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300" alt="CMO" />
            </div>
            <h3>Emily Rodriguez</h3>
            <p>Chief Marketing Officer</p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className={styles.cta}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Join Our Journey
        </motion.h2>
        <p>Discover the difference when you shop with us</p>
        <motion.button 
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </motion.section>
    </div>
  );
}