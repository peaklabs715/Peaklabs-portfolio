"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './VideoModal.module.css';
import { useEffect } from 'react';

export default function VideoModal({ isOpen, onClose, videoId }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div style={{ position: 'relative', width: '100%', maxWidth: '1000px' }}>
          <button className={styles.closeButton} onClick={onClose}>
            Close <X size={24} />
          </button>
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {videoId && (
              <iframe 
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
