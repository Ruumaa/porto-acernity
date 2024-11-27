/* eslint-disable @typescript-eslint/no-unused-vars */
import { MotionValue } from 'framer-motion';
import CTAContent from './CTAContent';

const CTA = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  return (
    <div className="max-h-[100vh] py-[20vh]">
      <CTAContent />
    </div>
  );
};

export default CTA;
