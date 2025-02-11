import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const VisitButton = () => {
  const [isHover, setIsHover] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <>
      {/* container */}
      <button
        className="flex items-center text-black px-6 py-2 rounded-lg relative overflow-clip cursor-pointer dark:hover:bg-black hover:bg-white bg-black dark:bg-white  transition-all duration-300 ease-in hover:shadow-sky-500/[0.1] hover:shadow-md"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* circle */}
        <motion.div
          className="size-[6px] bg-white dark:bg-black rounded-full absolute left-5"
          animate={{
            scale: isHover ? 45 : 1,
            backgroundColor: isHover
              ? isLight
                ? '#fff'
                : '#000'
              : isLight
              ? '#fff'
              : '#000',
          }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
        ></motion.div>
        {/* title */}
        <motion.div
          animate={{
            x: isHover ? -10 : 8,
            color: isHover
              ? isLight
                ? '#000'
                : '#fff'
              : isLight
              ? '#fff'
              : '#000',
          }}
          className="text-xs z-[1] font-merrieweather"
        >
          VISIT
        </motion.div>
        {/* icon */}
        <motion.div
          animate={{ x: isHover ? -7 : 7 }}
          className="absolute flex items-center justify-center right-[8px] dark:text-white"
        >
          <ArrowRight size={15} />
        </motion.div>
      </button>
    </>
  );
};

export default VisitButton;
