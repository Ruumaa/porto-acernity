import { AuroraBackground } from '@/components/ui/aurora-background';
import React, { ReactNode } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import ScrollMore from './ScrollMore';

const HeroBg = ({
  children,
  scrollYProgress,
}: {
  children: ReactNode;
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.div
      style={{
        scale,
        rotate,
        filter: blur,
      }}
      className="sticky top-0 h-screen pb-[10vh]"
    >
      <div className="h-screen relative bg-yellow-200">
        <AuroraBackground>{children}</AuroraBackground>
        <div className="absolute bottom-2 md:bottom-5 right-5 md:right-20">
          <ScrollMore />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroBg;
