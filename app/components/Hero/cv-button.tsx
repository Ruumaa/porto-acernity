import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FileText } from 'lucide-react';

const CVButton = () => {
  const navigate = useRouter();
  const [isHover, setIsHover] = React.useState(false);
  const handleClick = () => {
    navigate.push('/pdf/CV.pdf');
  };
  return (
    <>
      <div
        className={`flex justify-center relative overflow-hidden cursor-pointer py-2 px-6 mt-4 rounded-lg ${
          isHover ? 'bg-[rgb(4 120 87)]' : 'bg-black dark:bg-white'
        } transition-all duration-500 ease-in`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
      >
        {/* title */}
        <motion.div
          className="z-[1] text-sm font-merrieweather flex items-center justify-start gap-x-1"
          animate={{ color: isHover ? '#ffffff' : '#000000' }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
        >
          <FileText size={15} />
          View CV
        </motion.div>
        {/* circle */}
        <motion.div
          className="size-[6px] bg-black rounded-full absolute -bottom-3"
          animate={{
            scale: isHover ? 45 : 1,
            backgroundColor: isHover ? 'rgb(4 120 87)' : '#000000',
          }}
          transition={{ ease: 'easeIn', duration: 0.4 }}
        ></motion.div>
      </div>
    </>
  );
};

export default CVButton;
