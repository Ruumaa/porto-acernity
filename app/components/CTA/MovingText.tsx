import { MotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MovingText = ({
  scrollYProgress,
  color,
}: {
  scrollYProgress: MotionValue<number>;
  color: string;
}) => {
  const paths = useRef<(SVGTextPathElement | null)[]>([]);

  useEffect(() => {
    scrollYProgress.on('change', (e) => {
      paths.current.forEach((path: any, i: any) => {
        path.setAttribute('startOffset', -50 + i * 50 + e * 50 + '%');
      });
    });
  }, [scrollYProgress]);

  return (
    <div className="absolute inset-0 z-10">
      <svg className="w-full pb-10" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />

        <text
          className="text-[6.5px] uppercase font-merrieweather font-semibold "
          style={{ fill: color }}
        >
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => {
                  paths.current[i] = ref;
                }}
                startOffset={i * 50 + '%'}
                href="#curve"
              >
                Frontend Developer · Web Developer
              </textPath>
            );
          })}
        </text>
      </svg>
    </div>
  );
};

export default MovingText;
