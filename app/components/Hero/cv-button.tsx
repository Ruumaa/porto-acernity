import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FileText } from 'lucide-react';
import { useTheme } from 'next-themes';

const CVButton = () => {
  const navigate = useRouter();
  const { theme } = useTheme();
  const [isHover, setIsHover] = React.useState(false);
  const handleClick = () => {
    window.open('/pdf/CV.pdf');
  };
  return (
    <>
      <div
        className="flex justify-center relative overflow-hidden cursor-pointer px-3 py-2 md:px-6 mt-4 rounded-lg bg-black dark:bg-white shadow-sky-500/[0.2]
           transition-all duration-500 hover:bg-white hover:shadow-sky-500/[0.1] dark:hover:bg-black hover:shadow-lg"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
      >
        {/* title */}
        <motion.div
          className="z-[1] md:text-sm font-merrieweather flex items-center justify-start gap-x-1 text-xs"
          animate={{
            color: isHover
              ? theme === 'light'
                ? '#000000'
                : '#ffffff'
              : theme === 'light'
              ? '#ffffff'
              : '#000000',
          }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <FileText className="size-[13px] md:size-[15px]" />
          View CV
        </motion.div>
        {/* circle */}
        <motion.div
          className="size-[6px] bg-black dark:bg-white  rounded-full absolute -bottom-3 "
          animate={{
            scale: isHover ? 30 : 1,
            backgroundColor: isHover
              ? theme === 'light'
                ? '#ffffff'
                : '#000000'
              : theme === 'light'
              ? '#ffffff'
              : '#000000',
          }}
          transition={{ ease: 'easeIn', duration: 0.3 }}
        ></motion.div>
      </div>
    </>
  );
};

export default CVButton;
