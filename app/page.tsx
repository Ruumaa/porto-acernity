'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
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
      <CTA />
      <Footer />
    </>
  );
}
