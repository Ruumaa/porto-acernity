import FadeContainer from '@/components/animations/FadeContainer';
import { motion } from 'framer-motion';
import { CornerRightDown } from 'lucide-react';

const ScrollMore = () => {
  return (
    <FadeContainer
      initialY={50}
      className="flex items-center justify-between font-poppins font-extralight"
    >
      <h5 className="font-extralight dark:text-white text-xs md:text-sm">
        Keep Scrolling
      </h5>
      <motion.div
        className="mt-5"
        initial={{ rotate: 0, y: -3 }}
        animate={{ rotate: [0, 15, 0], y: [-3, 3, -3] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        <CornerRightDown size={15} className="dark:text-white" />
      </motion.div>
    </FadeContainer>
  );
};

export default ScrollMore;
