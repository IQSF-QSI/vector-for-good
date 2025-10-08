import React from 'react';
import { motion } from 'framer-motion';

const ModernCard = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false, 
  gradient = false,
  glassmorphism = false,
  animation = 'fadeIn',
  delay = 0
}) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay }
    },
    slideLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    }
  };

  const baseClasses = `
    relative overflow-hidden rounded-3xl border transition-all duration-500
    ${glassmorphism 
      ? 'bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl' 
      : 'bg-white border-gray-200 shadow-lg'
    }
    ${hover ? 'hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1' : ''}
    ${glow ? 'hover:shadow-blue-500/25 hover:border-blue-500/50' : ''}
    ${gradient ? 'bg-gradient-to-br from-white to-gray-50' : ''}
  `;

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      {...animations[animation]}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default ModernCard;
