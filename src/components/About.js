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
          <h2 className={styles.title}>We Build Worlds.</h2>
          <p className={styles.description}>
            Founded by a duo of passionate animators and motion designers, <span className={styles.highlight}>PeakLabs</span> was born out of a desire to break the mold of traditional advertising. 
          </p>
          <p className={styles.description}>
            We believe that every brand has a unique story, and the most effective way to tell that story is through dynamic, visually arresting animation. From concept to final render, we obsess over every frame to ensure your message resonates with your audience.
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
