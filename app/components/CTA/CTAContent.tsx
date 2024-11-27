import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const CTAContent = () => {
  const { theme } = useTheme();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const bgColor = hydrated
    ? theme === 'dark'
      ? '#262626'
      : 'rgb(209 213 219)'
    : 'rgb(209 213 219)';

  return (
    <>
      <ResponsiveLayout>
        <div className="w-full h-full relative z-10 font-poppins">
          <CardSpotlight
            className="w-full min-h-80 flex items-center justify-around"
            color={bgColor}
          >
            <div className="relative z-20 w-2/4">
              <h1 className="text-4xl font-merrieweather font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-indigo-300 to-indigo-800 dark:from-indigo-50 dark:to-indigo-400">
                Transforming Ideas Into Interactive Realities
              </h1>
              <p className="text-neutral-500 dark:text-neutral-300 text-sm">
                Bringing your creative ideas to life with interactive web
                applications that engage and inspire. Whether it&apos;s a
                portfolio or a full product, your vision becomes reality.{' '}
              </p>
            </div>
            <div className="relative z-20">
              <HoverBorderGradient className="dark:bg-black bg-white hover:bg-gradient-to-br text-black dark:text-white px-5 py-3">
                Let&apos;s Collaborate
              </HoverBorderGradient>
            </div>
          </CardSpotlight>
        </div>
      </ResponsiveLayout>
    </>
  );
};

export default CTAContent;
