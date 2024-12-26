import { FlipWords } from '@/components/ui/flip-words';
import { motion } from 'framer-motion';
import CVButton from './cv-button';

const HeroContent = () => {
  const words = ['Hello!', 'こんにちは!', 'Bonjour!', 'Habari!'];

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className="relative flex flex-col gap-1 md:gap-3 items-center justify-center px-4 dark:text-white font-poppins text-center h-full md:py-[10vh]"
    >
      <div className="text-2xl md:text-4xl font-merrieweather font-extralight pl-3">
        <FlipWords words={words} duration={1000} />
      </div>
      <div className="text-2xl md:text-4xl font-light -mt-2">
        I&apos;m Titan Ramadhan
      </div>
      <div className="text-[1.75rem] leading-[2rem] max-w-2xl md:text-[3.5rem] md:leading-[4rem] py-5 md:py-4 font-merrieweather font-bold bg-clip-text text-transparent bg-gradient-to-bl from-indigo-100 via-indigo-400 to-sky-200 dark:from-indigo-50 dark:via-indigo-300 dark:to-sky-200">
        On a Journey to Master Web Development
      </div>
      <div className="text-xs md:text-base max-w-[18rem] md:max-w-lg text-neutral-400 dar:text-neutral-300 -mt-3 md:mb-4">
        Currently Focused on Frontend Development, Committed to Expanding My
        Skills and Making an Innovative Projects
      </div>
      <CVButton />
    </motion.div>
  );
};

export default HeroContent;
