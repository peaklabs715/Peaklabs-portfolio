"use client";

import { motion } from 'framer-motion';
import { Box, PlaySquare, PenTool } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: "3D Animation",
    description: "Immersive 3D motion graphics that bring products to life. Perfect for tech product reveals and high-end brand commercials.",
    icon: <Box size={32} />
  },
  {
    id: 2,
    title: "Motion Graphics",
    description: "Sleek, fast-paced 2D motion design. Ideal for UI demonstrations, explainer videos, and social media campaigns.",
    icon: <PlaySquare size={32} />
  },
  {
    id: 3,
    title: "Vector Animation",
    description: "Clean and scalable vector animations to simplify complex concepts and tell engaging, character-driven stories.",
    icon: <PenTool size={32} />
  }
];

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Our Capabilities
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We specialize in diverse animation styles to ensure your message is delivered with maximum impact.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
