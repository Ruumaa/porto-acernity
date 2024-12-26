import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import ProjectCard from './ProjectCard';
import FadeContainer from '@/components/animations/FadeContainer';

const ProjectsContent = () => {
  return (
    <ResponsiveLayout>
      <div className="w-full h-full relative z-10">
        <FadeContainer initialY={100}>
          <h1 className="text-4xl md:text-6xl  font-merrieweather font-bold text-center bg-clip-text text-transparent bg-gradient-to-l dark:bg-gradient-to-r dark:from-white dark:to-neutral-300  from-neutral-300 to-black bg-opacity-50 py-1">
            Latest Projects <br />
          </h1>
        </FadeContainer>
        <ProjectCard />
      </div>
    </ResponsiveLayout>
  );
};

export default ProjectsContent;
