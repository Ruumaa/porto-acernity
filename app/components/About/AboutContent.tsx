import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import WordsAnimation from '@/components/animations/WordsAnimation';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { experiencesContent } from './ExperienceData';
import ShimmerButton from '@/components/ui/shimmer-button';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { useRef } from 'react';
import { useScroll, motion, MotionValue, useTransform } from 'framer-motion';

const AboutContent = () => {
  const title = 'About Me';
  const paragraphs =
    'As a current computer science student, I am focused on advancing my skills to become an advanced web developer. I am passionate about continually seeking opportunities to learn and grow in the field. I am open to gaining practical experience through internships or full-time positions that will allow me to apply my knowledge and contribute to innovative projects.';

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = title.split(' ');
  const para = paragraphs.split(' ');
  return (
    <ResponsiveLayout overflow>
      <div
        className="relative z-20 w-full h-full py-[20vh] text-start font-poppins"
        ref={container}
      >
        <div>
          <p className="text-6xl font-bold font-merrieweather" id="about">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} range={[start, end]} proggress={scrollYProgress}>
                  {word}
                </Word>
              );
            })}
          </p>
          <p className="text-2xl max-w-full flex flex-wrap mt-10">
            {para.map((word, i) => {
              const start = i / para.length;
              const end = start + 1 / para.length;
              return (
                <Word key={i} range={[start, end]} proggress={scrollYProgress}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
        {/* <WordsAnimation
          value={title}
          className="text-6xl font-bold font-merrieweather"
        />
        <WordsAnimation
          value={paragraphs}
          className="text-2xl max-w-full flex flex-wrap mt-10"
        /> */}

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

const Word = ({
  children,
  range,
  proggress,
}: {
  children: string;
  range: [number, number];
  proggress: MotionValue<number>;
}) => {
  const opacity = useTransform(proggress, range, [0, 1]);
  return (
    <span className="my-1 mr-2 font-semibold font-merrieweather relative">
      <span className="absolute opacity-[0.2]"> {children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
