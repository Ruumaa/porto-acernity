import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { experiencesContent } from './ExperienceData';
import ShimmerButton from '@/components/ui/shimmer-button';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import WordsAnimation from '@/components/animations/WordsAnimation';
import FadeContainer from '@/components/animations/FadeContainer';
import React from 'react';

const AboutContent = () => {
  const content =
    'As a current computer science student, I am focused on advancing my skills to become an advanced web developer. I am passionate about continually seeking opportunities to learn and grow in the field. I am open to gaining practical experience through internships or full-time positions that will allow me to apply my knowledge and contribute to innovative projects.';

  return (
    <ResponsiveLayout overflow>
      <div className="relative z-20 w-full h-full py-[20vh] text-start font-poppins">
        <div>
          <FadeContainer initialX={30}>
            <h1 className="text-6xl font-bold font-merrieweather text-transparent bg-clip-text bg-gradient-to-bl dark:from-white dark:to-neutral-300  from-neutral-300 to-black">
              About Me
            </h1>
          </FadeContainer>
          <WordsAnimation
            value={content}
            className="text-2xl max-w-full flex flex-wrap mt-10 dark:text-neutral-300 text-neutral-800"
          />
        </div>

        {/* Experience */}
        <div className="mt-20">
          <FadeContainer initialY={100}>
            <h1 className="text-6xl font-black font-merrieweather mb-10 bg-clip-text text-transparent bg-gradient-to-bl dark:from-white dark:to-neutral-300  from-neutral-300 to-black">
              Experiences
            </h1>
          </FadeContainer>

          <TracingBeam>
            <div>
              {experiencesContent.map((item, index) => (
                <React.Fragment key={index}>
                  <FadeContainer initialY={100}>
                    <div className="my-10">
                      <h3 className="text-2xl font-roboto font-bold ">
                        {item.title}
                      </h3>

                      <ShimmerButton label={item.badge} />

                      <div className="prose prose-sm dark:prose-invert text-neutral-800 dark:text-neutral-300 ">
                        {item.description}
                      </div>
                      <div className="flex flex-row justify-start mt-5 mb-10">
                        <AnimatedTooltip items={item.techstack} />
                      </div>
                    </div>
                  </FadeContainer>
                </React.Fragment>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </ResponsiveLayout>
  );
};

export default AboutContent;
