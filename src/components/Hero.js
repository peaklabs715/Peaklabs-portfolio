"use client";

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroFallback}></div>
      {/* Placeholder video - client can swap this with their own reel MP4 */}
      <video 
        className={styles.videoBackground}
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>
      
      <div className={`container ${styles.content}`}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          High-Converting <br />
          <span className={styles.highlight}>AI UGC Ads</span>
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We are PeakLabs. We craft highly engaging, hyper-realistic AI-generated User Generated Content that elevates your brand and drives massive conversions.
        </motion.p>
        
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className={styles.primaryCta} onClick={scrollToWork}>
            View Our Reel
          </button>
          <button className={styles.secondaryCta} onClick={scrollToContact}>
            Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
