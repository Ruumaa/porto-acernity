import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Link from 'next/link';

const CTAContent = () => {
  return (
    <>
      <ResponsiveLayout>
        <div className="w-full h-full relative z-10 py-[20vh] font-poppins">
          <CardSpotlight className="w-full min-h-80 flex items-center justify-around">
            <div className="relative z-20 w-2/4">
              <h1 className="text-4xl font-merrieweather font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-indigo-50 to-indigo-400">
                Transforming Ideas Into Interactive Realities
              </h1>
              <p className="text-neutral-500 dark:text-neutral-300 text-sm">
                Bringing your creative ideas to life with interactive web
                applications that engage and inspire. Whether it&apos;s a
                portfolio or a full product, your vision becomes reality.{' '}
              </p>
            </div>
            <div className="relative z-20">
              <HoverBorderGradient className="dark:bg-black bg-white text-black dark:text-white px-5 py-3">
                Let&apos;s Collaborate
              </HoverBorderGradient>
            </div>
          </CardSpotlight>
        </div>
      </ResponsiveLayout>
      <div className="w-full h-80 dark:border-white/[0.2] border-black/[0.1] border border-t py-10 ">
        <ResponsiveLayout>
          <div className="w-full flex justify-between">
            <div className="w-1/2 h-full flex flex-col justify-between">
              <h1 className="text-4xl font-merrieweather font-bold mt-auto">
                ©2024 Ruumaa, All rights reserved.
              </h1>
            </div>

            <div className="w-1/2 grid grid-cols-2">
              <div className="w-56">
                {/* Label */}
                <h1 className="font-merrieweather font-medium text-xl ">
                  Navigation
                </h1>
                <span className=" my-4 block w-full h-[1px] bg-black/[0.1] dark:bg-white/[0.3]"></span>
                {/* Content */}
                <div className="flex flex-col gap-4  text-neutral-500 dark:text-neutral-300 font-light">
                  <Link href={'/#hero'}>Hero</Link>
                  <Link href={'/#about'}>About</Link>
                  <Link href={'/#projects'}>Projects</Link>
                </div>
              </div>
              <div className="w-56">
                <h1 className="font-merrieweather font-medium text-xl ">
                  Socials
                </h1>
                <span className=" my-4 block w-full h-[1px] bg-black/[0.1] dark:bg-white/[0.3]"></span>
                <div className="flex flex-col gap-4 mt-4 text-sm text-neutral-500 dark:text-neutral-300">
                  <Link href="www.linkedin.com/in/titan-ramadhan">
                    Linkedin
                  </Link>
                  <Link href="https://www.hackerrank.com/profile/titankalbuesa01">
                    HackerRank
                  </Link>
                  <Link href="https://github.com/Ruumaa" passHref>
                    Github
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveLayout>
      </div>
    </>
  );
};

export default CTAContent;
