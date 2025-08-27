import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfilePageTransition = ({ children, activeTab }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 30,
      scale: 0.98
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: -30,
      scale: 0.98
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfilePageTransition;