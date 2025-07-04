import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    
    // Simulate form submission success
    setTimeout(() => {
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  
  return (
    <div className={styles.contactContainer}>
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We'd love to hear from you. Our friendly team is always here to chat.
          </motion.p>
        </div>
      </motion.section>
      
      {/* Contact Cards */}
      <section className={styles.contactInfoSection}>
        <div className={styles.contactCards}>
            <motion.div 
                className={styles.infoCard}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className={styles.iconWrapper}>
                    <MapPin size={24} />
                </div>
                <h3>Visit Us</h3>
                <p>111 Sarojni Market, Delhi,<br />DH 1515, India</p>
            </motion.div>
            
            <motion.div 
                className={styles.infoCard}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 }}
            >
                <div className={styles.iconWrapper}>
                    <Phone size={24} />
                </div>
                <h3>Call Us</h3>
                <p>+91-9876543210</p>
                <p>+91-8765432109</p>
            </motion.div>
            
            <motion.div 
                className={styles.infoCard}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
            >
                <div className={styles.iconWrapper}>
                    <Mail size={24} />
                </div>
                <h3>Email Us</h3>
                <p>support@exclusive.com</p>
                <p>info@exclusive.com</p>
            </motion.div>
            
            <motion.div 
                className={styles.infoCard}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3 }}
            >
                <div className={styles.iconWrapper}>
                    <Clock size={24} />
                </div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday & Sunday: 11am - 3pm</p>
            </motion.div>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.contactFormContainer}>
            <motion.div 
                className={styles.formWrapper}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Send Us A Message</h2>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback is important to us.</p>
                
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name *" 
                                required 
                                value={formState.name}
                                onChange={handleChange}
                                className={styles.formControl}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email *" 
                                required 
                                value={formState.email}
                                onChange={handleChange}
                                className={styles.formControl}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Your Phone" 
                                value={formState.phone}
                                onChange={handleChange}
                                className={styles.formControl}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject *" 
                                required 
                                value={formState.subject}
                                onChange={handleChange}
                                className={styles.formControl}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                        <textarea 
                            name="message" 
                            rows="6" 
                            placeholder="Your Message *" 
                            required
                            value={formState.message}
                            onChange={handleChange}
                            className={styles.formControl}
                        ></textarea>
                    </div>
                    
                    <motion.button 
                        type="submit" 
                        className={styles.submitButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Send size={16} />
                        Send Message
                    </motion.button>
                    
                    {submitted && (
                        <motion.div 
                            className={styles.successMessage}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            <CheckCircle size={20} />
                            Thank you! Your message has been sent successfully.
                        </motion.div>
                    )}
                </form>
            </motion.div>
            
            <motion.div 
                className={styles.mapWrapper}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8536419939757!2d77.19433937520839!3d28.632525075756736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1688634860261!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className={styles.faqSection} data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Find quick answers to common questions</p>
        
        <div className={styles.faqContainer}>
            <div className={styles.faqItem} data-aos="fade-up">
                <h3>How can I track my order?</h3>
                <p>You can track your order by logging into your account and going to the 'My Orders' section. Alternatively, you can use the tracking link sent to your email after your order is shipped.</p>
            </div>
            
            <div className={styles.faqItem} data-aos="fade-up" data-aos-delay="100">
                <h3>What is your return policy?</h3>
                <p>We offer a 30-day return policy for most items. Products must be returned in their original condition with all tags attached. Please visit our Returns page for more detailed information.</p>
            </div>
            
            <div className={styles.faqItem} data-aos="fade-up" data-aos-delay="200">
                <h3>Do you ship internationally?</h3>
                <p>Yes, we ship to over 45 countries worldwide. Shipping fees and delivery times vary based on location. You can see specific shipping information during checkout.</p>
            </div>
            
            <div className={styles.faqItem} data-aos="fade-up" data-aos-delay="300">
                <h3>How can I cancel my order?</h3>
                <p>You can cancel your order within 24 hours of placing it by contacting our customer service team. After this window, please refer to our return policy.</p>
            </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <motion.section 
        className={styles.newsletter}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
                <MessageCircle size={40} />
                <h3>Subscribe to our Newsletter</h3>
                <p>Get the latest updates on new products and upcoming sales</p>
            </div>
            
            <form className={styles.newsletterForm}>
                <input type="email" placeholder="Your Email" />
                <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Subscribe
                </motion.button>
            </form>
        </div>
      </motion.section>
    </div>
  );
}