'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div className="relative h-[500vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <About scrollYProgress={scrollYProgress} />
      <Projects scrollYProgress={scrollYProgress} />
    </div>
  );
}
