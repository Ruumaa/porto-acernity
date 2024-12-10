import { easeInOut, motion } from 'framer-motion';
import { CornerRightDown } from 'lucide-react';

const ScrollMore = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easeInOut }}
      className="flex items-center justify-between font-poppins font-extralight"
    >
      <h5 className="font-extralight dark:text-white text-sm">
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
    </motion.div>
  );
};

export default ScrollMore;
