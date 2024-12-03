import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../Footer/Footer';
import CTAContent from './CTAContent';

const CTAandFooter = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  return (
    <div ref={container} className="">
      <CTAContent scrollYProgress={scrollYProgress} />
      <Footer />
    </div>
  );
};

export default CTAandFooter;
