import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import styles from './ContactUs.module.css';
import Navigation from '../components/Navigation';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

return (
    <>    
    <Navigation />
    <div className={styles.contactPage}>
        <section className={styles.hero} data-aos="fade-up">
            <div className={styles.heroContent}>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Our friendly team is always here to chat.</p>
            </div>
        </section>
        
        <section className={styles.contactInfo} data-aos="fade-up">
            <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                    <MapPin size={24} />
                </div>
                <h3>Visit Us</h3>
                <p>111 Sarojni Market, Delhi,<br />DH 1515, Bangladesh.</p>
            </div>
            
            <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                    <Phone size={24} />
                </div>
                <h3>Call Us</h3>
                <p>+88015-88888-9999</p>
                <p>+88015-88888-8888</p>
            </div>
            
            <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                    <Mail size={24} />
                </div>
                <h3>Email Us</h3>
                <p>support@exclusive.com</p>
                <p>info@exclusive.com</p>
            </div>
            
            <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                    <Clock size={24} />
                </div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Weekend: 10am - 4pm</p>
            </div>
        </section>
        
        <div className={styles.contactContainer}>
            <motion.section 
                className={styles.contactForm}
                ref={formRef}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                variants={fadeIn}
            >
                <h2 data-aos="fade-right">Got a question? We'd love to hear from you</h2>
                <p data-aos="fade-right" data-aos-delay="100">
                    Send us a message and we'll respond as soon as possible
                </p>
                
                <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="How can we help?"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your inquiry..."
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        className={styles.submitBtn}
                        disabled={formStatus === 'submitting'}
                    >
                        {formStatus === 'submitting' ? (
                            <span className={styles.sending}>Sending...</span>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Send size={16} />
                            </>
                        )}
                    </button>
                    
                    {formStatus === 'success' && (
                        <div className={styles.successMessage}>
                            <MessageCircle size={20} />
                            <span>Message sent successfully! We'll get back to you soon.</span>
                        </div>
                    )}
                </form>
            </motion.section>
            
            <motion.section 
                className={styles.mapSection}
                ref={mapRef}
                initial="hidden"
                animate={mapInView ? "visible" : "hidden"}
                variants={fadeIn}
            >
                <div className={styles.mapContainer} data-aos="fade-left">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9520633565483!2d77.19600111489762!3d28.634007382418967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c6d7!2sSarojini%20Nagar%20Market%2C%20Sarojini%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110023!5e0!3m2!1sen!2sin!4v1625647362500!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </motion.section>
        </div>
        
        <section className={styles.faq} data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            
            <div className={styles.faqContainer}>
                <div className={styles.faqItem} data-aos="fade-right" data-aos-delay="100">
                    <h3>How can I track my order?</h3>
                    <p>
                        You can track your order by logging into your account and visiting the "My Orders" 
                        section. Alternatively, use the tracking link provided in your shipping confirmation email.
                    </p>
                </div>
                
                <div className={styles.faqItem} data-aos="fade-right" data-aos-delay="200">
                    <h3>What is your return policy?</h3>
                    <p>
                        We offer a 30-day return policy for most items. Products must be returned in their 
                        original condition with tags attached. Some exclusions apply for hygiene products.
                    </p>
                </div>
                
                <div className={styles.faqItem} data-aos="fade-left" data-aos-delay="300">
                    <h3>Do you ship internationally?</h3>
                    <p>
                        Yes, we ship to over 100 countries worldwide. Shipping times and costs vary 
                        depending on your location. You can see specific details at checkout.
                    </p>
                </div>
                
                <div className={styles.faqItem} data-aos="fade-left" data-aos-delay="400">
                    <h3>How can I cancel my order?</h3>
                    <p>
                        If your order hasn't been shipped yet, you can cancel it through your account dashboard. 
                        Otherwise, please contact our customer support team as soon as possible.
                    </p>
                </div>
            </div>
        </section>
        
        <section className={styles.newsletter} data-aos="zoom-in">
            <div className={styles.newsletterContent}>
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get the latest updates, news and special offers sent directly to your inbox.</p>
                <form className={styles.newsletterForm}>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    </div>
    </>

);
};

export default ContactUs;