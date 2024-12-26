import { CardSpotlight } from '@/components/ui/card-spotlight';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MovingText from './MovingText';
import { MotionValue } from 'framer-motion';
import FadeContainer from '@/components/animations/FadeContainer';
import { useBgColor } from '@/app/hooks/BgColorHooks';

const CTAContent = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const { color, bgColor } = useBgColor();

  const handleMailTo = () => {
    window.location.href = 'mailto:titankalbuesa01@gmail.com';
  };

  return (
    <div className="relative h-screen">
      <FadeContainer
        className="w-full max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-full absolute inset-0 z-20 font-poppins flex items-center justify-center overflow-hidden"
        initialY={200}
      >
        <CardSpotlight
          className="w-full p-5 md:py-10 xl:py-16 flex flex-col md:flex-row md:items-center md:justify-around"
          color={bgColor}
        >
          <div className="relative z-20 w-full md:w-2/4">
            <h1 className="text-xl md:text-2xl xl:text-4xl text-center md:text-left font-merrieweather font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-indigo-300 to-indigo-800 dark:from-indigo-50 dark:to-indigo-400">
              Transforming Ideas Into Interactive Realities
            </h1>
            <p className="text-justify md:text-left mx-auto text-neutral-500 dark:text-neutral-300 text-sm">
              Bringing your creative ideas to life with interactive web
              applications that engage and inspire. Whether it&apos;s a
              portfolio or a full product, your vision becomes reality.
            </p>
          </div>
          <div className="relative z-30 w-full md:w-auto mt-7">
            <HoverBorderGradient
              onClick={handleMailTo}
              className="dark:bg-black bg-white text-black dark:text-white"
              containerClassName="w-full md:w-auto text-xs md:text-base hover:bg-gradient-to-br py-1 md:px-5 md:py-1"
            >
              Let&apos;s Collaborate
            </HoverBorderGradient>
          </div>
        </CardSpotlight>
      </FadeContainer>
      <MovingText scrollYProgress={scrollYProgress} color={color} />
    </div>
  );
};

export default CTAContent;
