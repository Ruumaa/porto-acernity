import { MotionValue, useTransform, motion } from 'framer-motion';
import AboutContent from './AboutContent';
import RadialGradient from '@/components/layouts/RadialGradient';

const About = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['blur(3px)', 'blur(0px)']
  );
  return (
    <motion.div
      style={{
        scale,
        rotate,
        filter: blur,
      }}
      className="relative h-fit max-h-[200vh] md:h-fit xl:h-[200vh]"
    >
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
        <RadialGradient />
        <AboutContent />
      </div>
    </motion.div>
  );
};

export default About;
