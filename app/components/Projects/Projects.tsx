import { Spotlight } from '@/components/ui/spotlight';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectsContent from './ProjectsContent';
import { useTheme } from 'next-themes';

const Projects = () => {
  const { theme } = useTheme();

  const spotlightColor = theme === 'dark' ? 'white' : 'black';
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="h-[160vh]  relative" id="projects">
      <div
        ref={ref}
        className="h-full w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center py-[10vh]"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {isInView && (
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill={spotlightColor}
          />
        )}
        <ProjectsContent />
      </div>
    </div>
  );
};

export default Projects;
