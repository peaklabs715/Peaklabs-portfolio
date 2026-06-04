"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import styles from './Work.module.css';
import VideoModal from './VideoModal';

const projects = [
  {
    id: 1,
    title: "Neon Cyberpunk Release",
    category: "3D Animation",
    videoId: "dQw4w9WgXcQ", // YouTube ID
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: 2,
    title: "Minimalist Brand Reveal",
    category: "Motion Graphics",
    videoId: "dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 3,
    title: "Dynamic Sports Promo",
    category: "2D Animation",
    videoId: "dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  },
  {
    id: 4,
    title: "Tech Explainer Series",
    category: "Vector Animation",
    videoId: "dQw4w9WgXcQ",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  }
];

export default function Work() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section className={styles.workSection} id="work">
      <div className="container">
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Selected Works
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A curated showcase of our recent high-impact animated advertisements.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={styles.card}
              onClick={() => setActiveVideoId(project.videoId)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.thumbnailContainer}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <video 
                  className={styles.videoPreview}
                  muted loop playsInline
                  onMouseOver={e => e.target.play()}
                  onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
                >
                  <source src={project.videoPreview} type="video/mp4" />
                </video>
              </div>
              
              <div className={styles.overlay}>
                <div className={styles.projectCategory}>{project.category}</div>
                <div className={styles.projectTitle}>{project.title}</div>
              </div>
              
              <div className={styles.playButton}>
                <Play fill="currentColor" size={28} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal 
        isOpen={!!activeVideoId} 
        onClose={() => setActiveVideoId(null)} 
        videoId={activeVideoId} 
      />
    </section>
  );
}
