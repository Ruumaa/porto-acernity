import { motion } from 'framer-motion';
import React from 'react';

const FlipLink = ({
  children,
  href,
  onClick,
}: {
  children: string;
  href?: string;
  onClick?: (e: any) => void;
}) => {
  const duration = 0.15;
  const stagger = 0.015;

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-black font-merrieweather uppercase text-xs cursor-pointer"
      style={{ lineHeight: 1 }}
      onClick={onClick}
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
    </motion.a>
  );
};

export default FlipLink;
