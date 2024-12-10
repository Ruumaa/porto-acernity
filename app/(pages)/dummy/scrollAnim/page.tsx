'use client';

import VisitButton from '@/app/components/Projects/visit-button';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ArrowDown from '@/public/arrow-down.svg';
import Image from 'next/image';
import WordsAnimation from '@/components/animations/WordsAnimation';

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
      <div className="size-52 bg-gray-500 flex items-center justify-around"></div>
      <VisitButton />
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

  const title =
    'As a current computer science student, I am focused on advancing my skills to become an advanced web developer. I am passionate about continually seeking opportunities to learn and grow in the field. I am open to gaining practical experience through internships or full-time positions that will allow me to apply my knowledge and contribute to innovative projects.';

  const para =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum ab maxime sunt at autem veritatis atque corporis temporibus soluta?';
  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-[200vh] w-full bg-blue-500 flex items-center justify-center"
    >
      <div className="h-full w-full max-w-2xl bg-red-200 overflow-hidden ">
        <WordsAnimation value={title} className="text-2xl font-bold" />
        <WordsAnimation value={title} className="text-2xl font-bold" />
      </div>
    </motion.div>
  );
};

const Section3 = () => {
  return (
    <>
      <MovingText />
    </>
  );
};

const MovingText = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const paths = useRef<(SVGTextPathElement | null)[]>([]);
  useEffect(() => {
    scrollYProgress.on('change', (e) => {
      paths.current.forEach((path: any, i) => {
        path.setAttribute('startOffset', -40 + i * 40 + e * 40 + '%');
      });
    });
  }, [scrollYProgress]);

  return (
    <div ref={container} className="bg-white">
      <svg className="w-full pb-10" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />

        <text className="text-[6px] uppercase" style={{ fill: 'red' }}>
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                key={i}
                // ref={(ref) => (paths.current[i] = ref)}
                ref={(ref) => {
                  paths.current[i] = ref; // Simpan ref di array tanpa mengembalikan nilai
                }}
                startOffset={i * 40 + '%'}
                href="#curve"
              >
                Curabitur mattis efficitur velit
              </textPath>
            );
          })}
        </text>
      </svg>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="relative h-[500px] bg-gray-200"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+500px)] -top-[100vh] ">
        <div className="h-[500px] sticky top-[calc(100vh-500px)] ">
          <motion.div className="h-full flex justify-center gap-10 items-center p-10">
            <div className="size-20 bg-sky-200 rounded-sm" />
            <div className="size-20 bg-blue-200 rounded-lg rotate-45" />
            <div className="size-20 bg-indigo-200 rounded-md rotate-12 " />
            <div className="size-20 bg-violet-200 rounded-xl -rotate-12" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SpiralArrow = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-24 h-24"
      initial={{ rotate: 0 }}
      animate={{
        rotate: 360,
        translateX: [0, 10, 20, 30, 40], // Gerakan spiral
        translateY: [0, 10, 20, 30, 40],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#000"
        strokeWidth="3"
        fill="none"
      />
      <motion.polyline
        points="50,5 50,15 70,15" // Panah yang bergerak di sekitar spiral
        stroke="#000"
        strokeWidth="3"
        fill="none"
        transform="rotate(0 50 50)"
      />
    </motion.svg>
  );
};
