import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import ProjectCard from './ProjectCard';

const ProjectsContent = () => {
  return (
    <ResponsiveLayout>
      <div className="w-full h-full relative z-10">
        <h1 className="text-6xl  font-merrieweather font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-1">
          Latest Projects <br />
        </h1>
        <ProjectCard />
      </div>
    </ResponsiveLayout>
  );
};

export default ProjectsContent;
