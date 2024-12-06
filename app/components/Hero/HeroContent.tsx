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
      className="relative flex flex-col gap-3 items-center justify-center px-4 dark:text-white font-poppins text-center h-full py-[10vh]"
    >
      <div className="text-2xl md:text-4xl font-black font-poppins pl-3 bg-clip-text text-transparent">
        <FlipWords words={words} duration={1000} />
      </div>
      <div className="text-2xl md:text-4xl font-extralight ">
        I&apos;m Titan Ramadhan
      </div>
      {/* Title */}
      <div className="text-xl md:text-4xl py-4 font-merrieweather font-bold">
        On a Journey to Master Web Development
      </div>
      {/* Sub title */}
      <div className="max-w-2xl text-neutral-300 -mt-3">
        Currently Focused on Frontend Development, Committed to Expanding My
        Skills and Making a Meaningful Impact Through Innovative Projects
      </div>
      {/* Button View CV */}
      <CVButton />

      {/* Scroll for more */}
    </motion.div>
  );
};

export default HeroContent;
