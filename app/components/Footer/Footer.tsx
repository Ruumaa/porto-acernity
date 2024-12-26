import { useScrollHook } from '@/app/hooks/ScrollHooks';
import FlipLink from './FlipLink';
import StickyWrapper from './StickyWrapper';
import { motion } from 'framer-motion';
import { navItems } from '../Navbar/NavItems';

const Footer = () => {
  const year = new Date().getFullYear();
  const { scrollToSection } = useScrollHook();
  return (
    <StickyWrapper>
      <div className="w-full h-full flex flex-col  md:flex-row md:justify-between py-5 md:py-10 ">
        <div className="order-2 md:order-1 mt-8 md:mt-0 md:w-1/2 h-full flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-merrieweather font-bold">
            ©{year} Ruumaa, All rights reserved.
          </h1>
        </div>
        <div className="order-1 md:w-1/2 grid grid-cols-2">
          <div className="md:w-56">
            <motion.h1 className="font-merrieweather font-bold text-base md:text-xl uppercase ">
              Navigation
            </motion.h1>
            <motion.span className="my-2 block w-36 h-[1px] dark:bg-black/[0.5] bg-white/[0.5]" />
            <div className="flex flex-col gap-4 mt-4  dark:text-neutral-500 text-neutral-300">
              {navItems.map((item) => (
                <FlipLink
                  key={item.name}
                  // href={item.link}
                  onClick={(e) => scrollToSection(e, item.link)}
                >
                  {item.name}
                </FlipLink>
              ))}
            </div>
          </div>
          <div className="md:w-56">
            <h1 className="font-merrieweather font-bold  text-base md:text-xl uppercase ">
              Socials
            </h1>
            <span className="my-2 block  w-36 h-[1px] dark:bg-black/[0.5] bg-white/[0.5]" />
            <div className="flex flex-col gap-4 mt-4  dark:text-neutral-500 text-neutral-300">
              <FlipLink href="https://github.com/Ruumaa">Github</FlipLink>
              <FlipLink href="https://www.linkedin.com/in/titan-ramadhan">
                Linkedin
              </FlipLink>
              <FlipLink href="https://www.hackerrank.com/profile/titankalbuesa01">
                HackerRank
              </FlipLink>
            </div>
          </div>
        </div>
      </div>
    </StickyWrapper>
  );
};

export default Footer;
