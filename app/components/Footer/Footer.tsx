import FlipLink from './FlipLink';
import StickyWrapper from './StickyWrapper';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <StickyWrapper>
      <div className="w-full h-full flex justify-between py-10 ">
        <div className="w-1/2 h-full flex flex-col ">
          <h1 className="text-4xl font-merrieweather font-bold">
            ©2024 Ruumaa, All rights reserved.
          </h1>
        </div>

        <div className="w-1/2 grid grid-cols-2">
          <div className="w-56">
            <motion.h1 className="font-merrieweather font-bold text-xl uppercase ">
              Navigation
            </motion.h1>
            <motion.span className="my-2 block w-full h-[1px] dark:bg-black/[0.5] bg-white/[0.5]" />
            <div className="flex flex-col gap-4 mt-4  dark:text-neutral-500 text-neutral-300">
              <FlipLink href={'#hero'}>Hero</FlipLink>
              <FlipLink href={'#about'}>About</FlipLink>
              <FlipLink href={'#projects'}>Projects</FlipLink>
            </div>
          </div>
          <div className="w-56">
            <h1 className="font-merrieweather font-bold  text-xl uppercase ">
              Socials
            </h1>
            <span className=" my-2 block w-full h-[1px] dark:bg-black/[0.5] bg-white/[0.5]" />
            <div className="flex flex-col gap-4 mt-4  dark:text-neutral-500 text-neutral-300">
              <FlipLink href="https://github.com/Ruumaa">Github</FlipLink>
              <FlipLink href="www.linkedin.com/in/titan-ramadhan">
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
