import clsx from 'clsx';
import { motion } from 'framer-motion';

const HoverUp = ({
  label,
  isHovered,
  className,
}: {
  label: React.ReactNode;
  isHovered: boolean;
  className?: string;
}) => {
  const duration = 0.2;

  return (
    <motion.span
      animate={isHovered ? 'hovered' : 'initial'}
      className={clsx(
        'relative block overflow-hidden whitespace-nowrap font-bold font-merrieweather text-xs',
        className
      )}
      style={{ lineHeight: 1 }}
    >
      <div>
        <motion.span
          variants={{
            initial: {
              y: 0,
            },
            hovered: {
              y: '-100%',
            },
          }}
          transition={{ duration, ease: 'easeInOut' }}
          className="inline-block"
        >
          {label}
        </motion.span>
      </div>
      <div className="absolute inset-0">
        <motion.span
          variants={{
            initial: {
              y: '100%',
            },
            hovered: {
              y: 0,
            },
          }}
          transition={{
            duration: duration,
            ease: 'easeInOut',
          }}
          className="inline-block"
        >
          {label}
        </motion.span>
      </div>
    </motion.span>
  );
};

export default HoverUp;
