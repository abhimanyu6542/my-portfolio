'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'p-6',
  borderRadius = 'rounded-2xl',
  border = true,
  shadow = true,
  ...props 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`
        bg-white dark:bg-gray-800 
        ${border ? 'border border-gray-100 dark:border-gray-800' : ''}
        ${shadow ? 'shadow-lg' : ''}
        ${borderRadius}
        ${padding}
        ${className}
        transition-all duration-300
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;