'use client';

import { MotionValue, useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const WordsAnimation = ({
  value,
  className,
}: {
  value: string;
  className: string;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = value.split(' ');

  return (
    <p className={className} ref={container}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} proggress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default WordsAnimation;

const Word = ({
  children,
  range,
  proggress,
}: {
  children: string;
  range: [number, number];
  proggress: MotionValue<number>;
}) => {
  const opacity = useTransform(proggress, range, [0, 1]);
  return (
    <span className="my-1 mr-2 font-semibold font-merrieweather relative">
      <span className="absolute opacity-[0.2]"> {children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
