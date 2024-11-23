'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import CTA from './components/CTA/CTA';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div className="relative h-[600vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <About scrollYProgress={scrollYProgress} />
      <Projects scrollYProgress={scrollYProgress} />
      <CTA scrollYProgress={scrollYProgress} />
      {/* footer */}
    </div>
  );
}
