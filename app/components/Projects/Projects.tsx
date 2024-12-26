import { Spotlight } from '@/components/ui/spotlight';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectsContent from './ProjectsContent';
import { useTheme } from 'next-themes';
import RadialGradient from '@/components/layouts/RadialGradient';

const Projects = () => {
  const { theme } = useTheme();

  const spotlightColor = theme === 'dark' ? 'white' : 'black';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="h-fit relative" id="projects">
      <div
        ref={ref}
        className="h-full w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center py-20 lg:py-[10vh]"
      >
        <RadialGradient />
        {isInView && (
          <Spotlight
            className="-top-80 left-0 md:left-60 md:-top-20"
            fill={spotlightColor}
          />
        )}
        <ProjectsContent />
      </div>
    </div>
  );
};

export default Projects;
