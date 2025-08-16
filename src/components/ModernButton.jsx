import React from 'react';
import { motion } from 'framer-motion';

const ModernButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  ...props 
}) => {
  const buttonVariants = {
    primary: 'btn-modern-primary',
    secondary: 'btn-modern-secondary',
    accent: 'btn-modern-accent',
    outline: 'btn-modern-outline'
  };

  const sizes = {
    sm: 'btn-modern-sm',
    md: 'btn-modern-md',
    lg: 'btn-modern-lg'
  };

  return (
    <motion.button
      className={`btn-modern ${buttonVariants[variant]} ${sizes[size]} ${className} ${disabled ? 'disabled' : ''}`}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default ModernButton;