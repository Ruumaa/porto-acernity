import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const VisitButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {/* container */}
      <div
        className={`flex items-center text-black px-6 py-2 rounded-full relative overflow-clip cursor-pointer ${
          isHover ? 'bg-[#0a00c1]' : 'bg-white'
        } transition-all duration-300 ease-in`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* circle */}
        <motion.div
          className="size-[6px] bg-black rounded-full absolute left-5"
          animate={{
            scale: isHover ? 45 : 1,
            backgroundColor: isHover ? '#0a00c1' : '#000000',
          }}
          transition={{ ease: 'easeIn', duration: 0.2 }}
        ></motion.div>
        {/* title */}
        <motion.div
          animate={{
            x: isHover ? -10 : 8,
            color: isHover ? '#FFFFFF' : '#000000',
          }}
          className="text-xs z-[1] font-merrieweather"
        >
          {/* {isHover ? 'Visit' : "Don't be shy"} */}
          VISIT
        </motion.div>
        {/* icon */}
        <motion.div
          animate={{ x: isHover ? -7 : 7 }}
          className="absolute flex items-center justify-center right-[8px] text-white"
        >
          <ArrowRight size={15} />
        </motion.div>
      </div>
    </>
  );
};

export default VisitButton;
