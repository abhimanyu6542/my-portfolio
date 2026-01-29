'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Section = forwardRef(({
  children,
  id,
  className = '',
  padding = true,
  background = 'default',
  container = true,
  ...props
}, ref) => {
  const backgrounds = {
    default: 'bg-white dark:bg-gray-950',
    gray: 'bg-gray-50 dark:bg-gray-900',
    gradient: 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900',
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`
        ${backgrounds[background]}
        ${padding ? 'py-16 md:py-24 lg:py-32' : ''}
        ${className}
      `}
      {...props}
    >
      {container ? (
        <div className="container-custom">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;