/* eslint-disable @typescript-eslint/no-unused-vars */
import { MotionValue } from 'framer-motion';
import CTAContent from './CTAContent';
import { Vortex } from '@/components/ui/vortex';

const CTA = () => {
  return (
    <div className="h-screen  flex items-center justify-center relative pt-20">
      {/* <Vortex className="flex items-center flex-col justify-center  py-4 w-full"> */}
      <CTAContent />
      {/* </Vortex> */}
    </div>
  );
};

export default CTA;
