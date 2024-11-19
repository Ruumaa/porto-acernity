import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import WordsAnimation from '@/components/animations/WordsAnimation';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { experiencesContent } from './ExperienceData';
import ShimmerButton from '@/components/ui/shimmer-button';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

const AboutContent = () => {
  const title = 'About Me';
  const paragraphs =
    'As a current computer science student, I am focused on advancing my skills to become an advanced web developer. I am passionate about continually seeking opportunities to learn and grow in the field. I am open to gaining practical experience through internships or full-time positions that will allow me to apply my knowledge and contribute to innovative projects.';
  return (
    <ResponsiveLayout overflow>
      <div className="relative z-20 w-full h-full py-[20vh] text-start font-poppins">
        <WordsAnimation
          value={title}
          className="text-6xl font-bold font-merrieweather"
        />
        <WordsAnimation
          value={paragraphs}
          className="text-2xl max-w-full flex flex-wrap mt-10"
        />
        {/* Experience */}
        <div className="mt-20">
          <h1 className="text-6xl font-bold font-merrieweather mb-10">
            Experiences
          </h1>
          <TracingBeam>
            <div>
              {experiencesContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h3 className="text-xl font-roboto font-medium">
                    {item.title}
                  </h3>

                  <ShimmerButton label={item.badge} />

                  <div className="prose prose-sm dark:prose-invert">
                    {item.description}
                  </div>
                  <div className="flex flex-row justify-start mt-5 mb-10">
                    <AnimatedTooltip items={item.techstack} />
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </ResponsiveLayout>
  );
};

export default AboutContent;
