"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={`container ${styles.content}`}>
        <motion.div 
          className={styles.imageColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
              alt="PeakLabs Founders" 
              className={styles.image}
            />
          </div>
        </motion.div>

        <motion.div 
          className={styles.textColumn}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={styles.title}>We Create Scale.</h2>
          <p className={styles.description}>
            Founded by a duo of cutting-edge AI creators, <span className={styles.highlight}>PeakLabs</span> was born out of a desire to break the mold of traditional, slow, and expensive advertising. 
          </p>
          <p className={styles.description}>
            We leverage state-of-the-art artificial intelligence to produce highly engaging User Generated Content (UGC). By combining hyper-realistic AI avatars with data-driven scripting, we deliver high-converting ads at a fraction of the time and cost.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>8</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
