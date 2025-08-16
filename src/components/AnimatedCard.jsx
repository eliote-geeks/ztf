import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ 
  children, 
  className = '', 
  whileHover = { y: -8, scale: 1.02 },
  whileTap = { scale: 0.98 },
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.3 },
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      className={`modern-card ${className}`}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ ...transition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;