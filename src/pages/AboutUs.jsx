import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './AboutUs.module.css';
import Navigation from '../components/Navigation';

const AboutUs = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
      bio: "With over 15 years in retail, Sarah founded Exclusive with a vision to create an exceptional online shopping experience."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Leading our tech team, Michael ensures our platform delivers a seamless shopping experience across all devices."
    },
    {
      name: "Amara Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
      bio: "Amara brings our brand to life through captivating visuals and creative direction that sets us apart in the market."
    },
    {
      name: "David Kim",
      role: "Head of Customer Experience",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
      bio: "David ensures every customer interaction exceeds expectations, building loyalty and trust in our brand."
    }
  ];

  return (
    <>    
    <Navigation />
    <div className={styles.aboutPage}>
      <motion.section 
        className={styles.hero}
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className={styles.heroContent}>
          <h1 data-aos="fade-up">About Exclusive</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            We're revolutionizing e-commerce with curated collections and exceptional customer service
          </p>
        </div>
      </motion.section>

      <section className={styles.stats} data-aos="fade-up">
        <div className={styles.statItem}>
          <span className={styles.statNumber}>10M+</span>
          <span className={styles.statLabel}>Happy Customers</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>15+</span>
          <span className={styles.statLabel}>Years of Excellence</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>100+</span>
          <span className={styles.statLabel}>Premium Brands</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>200+</span>
          <span className={styles.statLabel}>Team Members</span>
        </div>
      </section>

      <motion.section 
        className={styles.story}
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <h2 data-aos="fade-right">Our Story</h2>
            <p data-aos="fade-right" data-aos-delay="100">
              Founded in 2010, Exclusive began as a small online boutique specializing in unique fashion finds. 
              Our founder Sarah Johnson believed that online shopping should be just as exciting and personalized 
              as shopping in a high-end store.
            </p>
            <p data-aos="fade-right" data-aos-delay="200">
              Over the years, we've grown from a small team of 5 passionate individuals to a thriving company 
              of over 200 employees. What hasn't changed is our commitment to quality, customer service, and 
              providing a curated shopping experience that delights our customers.
            </p>
            <p data-aos="fade-right" data-aos-delay="300">
              Today, Exclusive offers everything from fashion and electronics to home goods and beauty products, 
              carefully selected to ensure only the best makes it to our shelves.
            </p>
          </div>
          <div className={styles.storyImage} data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&h=800" alt="Exclusive Store" />
          </div>
        </div>
      </motion.section>

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
            <div className={styles.valueIcon}>🌟</div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from product selection to delivery.</p>
          </div>
          <div className={styles.valueCard} data-aos="zoom-in" data-aos-delay="200">
            <div className={styles.valueIcon}>🤝</div>
            <h3>Customer First</h3>
            <p>Our customers are at the heart of every decision we make.</p>
          </div>
          <div className={styles.valueCard} data-aos="zoom-in" data-aos-delay="300">
            <div className={styles.valueIcon}>♻️</div>
            <h3>Sustainability</h3>
            <p>We're committed to reducing our environmental impact and promoting sustainable practices.</p>
          </div>
          <div className={styles.valueCard} data-aos="zoom-in" data-aos-delay="400">
            <div className={styles.valueIcon}>🔍</div>
            <h3>Quality</h3>
            <p>We never compromise on quality, ensuring every product meets our high standards.</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.team}
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2 data-aos="fade-up">Meet Our Leadership Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              className={styles.teamCard} 
              key={member.name}
              data-aos="fade-up" 
              data-aos-delay={100 * index}
            >
              <div className={styles.teamImageContainer}>
                <img src={member.image} alt={member.name} className={styles.teamImage} />
                <div className={styles.teamSocial}>
                  <a href="#" className={styles.socialIcon}>in</a>
                  <a href="#" className={styles.socialIcon}>f</a>
                  <a href="#" className={styles.socialIcon}>tw</a>
                </div>
              </div>
              <h3>{member.name}</h3>
              <span className={styles.role}>{member.role}</span>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className={styles.brands} data-aos="fade-up">
        <h2>Trusted by Premium Brands</h2>
        <div className={styles.brandLogos}>
          <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?w=150&h=80&fit=crop&auto=format" alt="Brand logo" />
          <img src="https://images.unsplash.com/photo-1563302111-ecc7b8e5d7b1?w=150&h=80&fit=crop&auto=format" alt="Brand logo" />
          <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=150&h=80&fit=crop&auto=format" alt="Brand logo" />
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=80&fit=crop&auto=format" alt="Brand logo" />
          <img src="https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=150&h=80&fit=crop&auto=format" alt="Brand logo" />
        </div>
      </section>
    </div>
    </>

  );
};

export default AboutUs;