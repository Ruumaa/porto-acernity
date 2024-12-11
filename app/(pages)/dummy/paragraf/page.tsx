/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import {
  useScroll,
  motion,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { useRef } from 'react';

const Page = () => {
  const paragraph1 = 'Lorem ipsum, dolor sit';
  const paragraph2 =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptates quas optio error similique consequatur placeat, qui magnam iusto explicabo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptates quas optio error similique consequatur placeat, qui magnam iusto explicabo?';
  const paragraph3 =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptates quas optio error similique consequatur placeat, qui magnam iusto explicabo?';

  return (
    <>
      <div className="h-screen"></div>
      <div className="min-h-screen">
        {/* Render paragraph 1 */}
        <Words value={paragraph1} />
        {/* Render paragraph 2 */}
        <Words value={paragraph2} dependencyScroll={true} />
        <Words value={paragraph3} dependencyScroll={true} />
      </div>

      <div className="h-screen"></div>
    </>
  );
};

export default Page;

const Words = ({
  value,
  dependencyScroll = false,
}: {
  value: string;
  dependencyScroll?: boolean;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  // Atur transform untuk paragraf kedua
  const adjustedScrollProgress = dependencyScroll
    ? useTransform(scrollYProgress, [0.9, 1], [0, 1])
    : scrollYProgress;

  const words = value.split(' ');
  useMotionValueEvent(adjustedScrollProgress, 'change', (latest) => {
    console.log(latest);
  });

  return (
    <p ref={container} className="p-10 text-3xl max-w-3xl flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} range={[start, end]} progress={adjustedScrollProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="my-1 mr-2 font-semibold font-merrieweather relative">
      <span className="absolute opacity-[0.2]"> {children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
