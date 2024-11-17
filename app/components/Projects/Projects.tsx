import { Spotlight } from '@/components/ui/spotlight';
import {
  MotionValue,
  useMotionValueEvent,
  useTransform,
  motion,
} from 'framer-motion';
import { useState } from 'react';
import ProjectsContent from './ProjectsContent';

const Projects = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Adjust range based on when "Projects" section is in view
    if (latest > 0.6) setIsVisible(true);
  });

  const opacity = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 1]);
  const theme =
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') === 'dark'
        ? 'white'
        : 'black'
      : 'white';

  return (
    <div className="h-[200vh] bg-background relative">
      <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {isVisible && (
          <motion.div style={{ opacity }}>
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill={theme}
            />
          </motion.div>
        )}
        <ProjectsContent />
      </div>
    </div>
  );
};

export default Projects;
