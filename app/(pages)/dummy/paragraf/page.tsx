'use client';

import { useScroll, motion, MotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TracingBeamDemo } from './TracingBeam';

const Page = () => {
  const paragraph =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quis tempora placeat dolore hic consequuntur quae ex amet excepturi molestiae?';
  return (
    <>
      <div className="h-screen"></div>
      <Paragraph value={paragraph} />
      <div className="h-screen"></div>
      <Words value={paragraph} />
      <div className="h-screen"></div>
    </>
  );
};

export default Page;

const Paragraph = ({ value }: { value: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  // useEffect(() => {
  //   scrollYProgress.on('change', (e) => console.log(e));
  // }, [scrollYProgress]);
  return (
    <>
      <motion.p
        ref={container}
        className="p-10 text-3xl max-w-3xl"
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
      <div>
        <h1>Tracing Beam</h1>
        <TracingBeamDemo />
      </div>
    </>
  );
};

const Words = ({ value }: { value: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = value.split(' ');

  return (
    <p ref={container} className="p-10 text-3xl max-w-3xl flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} proggress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({
  children,
  range,
  proggress,
}: {
  children: string;
  range: [number, number];
  proggress: MotionValue<number>;
}) => {
  const opacity = useTransform(proggress, range, [0, 1]);
  return (
    <span className="my-1 mr-2 font-semibold font-merrieweather relative">
      <span className="absolute opacity-[0.2]"> {children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
