'use client';

import { MotionValue, useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <>
      <main className="relative h-[400vh] overflow-hidden">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <Section3 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
};

export default Page;

const Section1 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.div
      style={{
        scale,
        rotate,
        filter: blur,
      }}
      className="h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] sticky top-0"
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <div className="size-52 bg-gray-500"></div>
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.3, 1], [-10, 0, 0]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    ['blur(3px)', 'blur(0px)', 'blur(0px)', 'blur(3px)'] // blurr
  );
  return (
    <motion.div
      style={{ scale, rotate, filter: blur }}
      className="relative h-[200vh] bg-indigo-600 pt-[10vh] flex flex-col items-center justify-between text-white "
    >
      <p>Section 2</p>
      <p>Section 2</p>
      <p>Section 2</p>
      <p>Section 2</p>
    </motion.div>
  );
};

const Section3 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const positionY = useTransform(scrollYProgress, [0, 1], ['30%', '0%']);

  return (
    <motion.div
      style={{
        // scale,
        // rotate,
        transform: `translateY(${positionY})`,
      }}
      className="relative h-[100vh] py-[10vh] bg-transparent text-[3.5vw] flex flex-col items-center justify-center text-white "
    >
      TESStt
    </motion.div>
  );
};
