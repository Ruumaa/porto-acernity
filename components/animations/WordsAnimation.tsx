/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { MotionValue, useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const WordsAnimation = ({
  value,
  className,
  dependencyScroll = false,
}: {
  value: string;
  className: string;
  dependencyScroll?: boolean;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = value.split(' ');

  const adjustedScrollProgress = dependencyScroll
    ? useTransform(scrollYProgress, [0.9, 1], [0, 1])
    : scrollYProgress;

  return (
    <p className={className} ref={container}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} proggress={adjustedScrollProgress}>
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
