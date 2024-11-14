'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import About from './components/About/About';
import Hero from './components/Hero/Hero';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div className="relative h-[400vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <About scrollYProgress={scrollYProgress} />
      <div className="h-[100vh] bg-background relative"></div>
    </div>
  );
}
