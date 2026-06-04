"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`container ${styles.nav}`}>
        <div className={styles.logo} onClick={scrollToTop}>
          Peak<span>Labs</span>
        </div>
        
        <nav className={styles.links}>
          <button className={styles.link} onClick={() => scrollTo('work')}>Work</button>
          <button className={styles.link} onClick={() => scrollTo('services')}>Services</button>
          <button className={styles.link} onClick={() => scrollTo('about')}>About</button>
        </nav>
        
        <button className={styles.cta} onClick={() => scrollTo('contact')}>
          Let's Talk
        </button>
      </div>
    </motion.header>
  );
}
