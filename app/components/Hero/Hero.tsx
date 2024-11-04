'use client';

import { useRef } from 'react';
import HeroBg from './HeroBg';
import HeroContent from './HeroContent';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div className="relative h-[200vh]">
      <HeroBg scrollYProgress={scrollYProgress}>
        <HeroContent />
      </HeroBg>
      <About scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default Hero;

const About = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ['blur(3px)', 'blur(0px)']
  );
  return (
    <motion.div
      style={{ scale, rotate, filter: blur }}
      className="relative h-screen bg-indigo-600 w-full"
    ></motion.div>
  );
};
