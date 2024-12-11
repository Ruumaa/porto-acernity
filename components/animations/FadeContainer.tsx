import { easeInOut, motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const FadeContainer = ({
  children,
  className,
  initialY,
  initialX,
  duration,
}: // key,
{
  children: ReactNode;
  className?: string;
  initialY?: number;
  initialX?: number;
  duration?: number;
  // key?: number | string;
}) => {
  return (
    // <React.Fragment key={key}>
    <motion.div
      initial={{ opacity: 0, y: initialY ?? 0, x: initialX ?? 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: duration ?? 1, ease: easeInOut }}
      className={className}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
    // </React.Fragment>
  );
};

export default FadeContainer;
