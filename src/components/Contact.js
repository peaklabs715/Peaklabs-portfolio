"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={`container ${styles.content}`}>
        <motion.div 
          className={styles.info}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Let's create something extraordinary.</h2>
          <p className={styles.subtitle}>
            Whether you have a specific project in mind or just want to explore how animation can elevate your brand, we're ready to talk.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div className={styles.detailContent}>
                <span className={styles.detailLabel}>Email Us</span>
                <span className={styles.detailValue}>peaklabs715@gmail.com</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div className={styles.detailContent}>
                <span className={styles.detailLabel}>Call Us</span>
                <span className={styles.detailValue}>+91 8796181683</span>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.detailContent}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>New Delhi</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className={styles.form}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" id="name" className={styles.input} placeholder="Your Name" />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} placeholder="you@company.com" />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" className={styles.textarea} placeholder="Tell us about your project..."></textarea>
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
          
          <a href="https://wa.me/918796181683" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
        </motion.form>
      </div>
    </section>
  );
}
