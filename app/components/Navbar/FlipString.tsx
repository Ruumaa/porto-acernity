import { motion } from 'framer-motion';
import React from 'react';

const FlipString = ({ children }: { children: string }) => {
  const duration = 0.15;
  const stagger = 0.015;

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase font-merrieweather text-xs"
      style={{ lineHeight: 1 }}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{ duration, ease: 'easeInOut', delay: stagger * i }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: duration,
              ease: 'easeInOut',
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};

export default FlipString;
