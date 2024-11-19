import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import HeroBg from './HeroBg';
import HeroContent from './HeroContent';
import { MotionValue } from 'framer-motion';

const Hero = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  return (
    <>
      <HeroBg scrollYProgress={scrollYProgress}>
        <ResponsiveLayout overflow>
          <HeroContent />
        </ResponsiveLayout>
      </HeroBg>
    </>
  );
};

export default Hero;
