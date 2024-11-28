import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import HeroBg from './HeroBg';
import HeroContent from './HeroContent';
import { MotionValue, useMotionValueEvent } from 'framer-motion';
import { Fragment } from 'react';

const Hero = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Page scroll: ', latest);
  });
  return (
    // <div id="hero">
    <>
      <HeroBg scrollYProgress={scrollYProgress}>
        <ResponsiveLayout overflow>
          <HeroContent />
        </ResponsiveLayout>
      </HeroBg>
    </>
    // </div>
  );
};

export default Hero;
