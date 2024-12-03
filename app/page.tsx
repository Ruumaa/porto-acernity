'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Lenis from 'lenis';
import CTAandFooter from './components/CTA/CTAandFooter';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main
        ref={container}
        className="relative h-[300vh] bg-gradient-to-tr from-white via-indigo-100 to-blue-200 dark:bg-gradient-to-l dark:from-zinc-900 dark:via-sky-100 dark:to-zinc-700"
      >
        <Hero scrollYProgress={scrollYProgress} />
        <About scrollYProgress={scrollYProgress} />
      </main>
      <Projects />
      <main>
        <CTAandFooter />
      </main>
    </>
  );
}
