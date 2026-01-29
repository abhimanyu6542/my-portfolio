'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const AnimationWrapper = forwardRef(({
  children,
  variants,
  initial = 'hidden',
  animate = 'visible',
  whileInView = false,
  viewportOptions = { once: true, amount: 0.3 },
  className = '',
  ...props
}, ref) => {
  const MotionComponent = motion.div;

  const baseVariants = variants || {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <MotionComponent
      ref={ref}
      variants={baseVariants}
      initial={initial}
      animate={whileInView ? undefined : animate}
      whileInView={whileInView ? 'visible' : undefined}
      viewport={whileInView ? viewportOptions : undefined}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
});

AnimationWrapper.displayName = 'AnimationWrapper';

export default AnimationWrapper;