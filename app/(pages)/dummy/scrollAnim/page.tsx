'use client';

import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useMotionValueEvent,
  useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
// import Lenis from 'lenis';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className="relative h-[300vh] bg-black">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
      <Section3 />
    </>
  );
}

const Section1 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
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
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });
  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-[200vh] w-full bg-blue-500"
    >
      <div className="bg-red-200 size-80"></div>
    </motion.div>
  );
};

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  return <div ref={ref} className="h-[100vh] w-full bg-yellow-500"></div>;
};
