import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { menuSlide, scale, slide } from './anim';
import Link from 'next/link';
import Curve from './curve';
import { navItemsBurger } from '@/lib/NavItems';
import FlipLink from '../Footer/FlipLink';
import { useScrollHook } from '@/app/hooks/ScrollHooks';
import { ModeToggle } from '../Navbar/ModeToggle';

type NavProps = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ setIsActive }: NavProps) => {
  const { activeSection } = useScrollHook();
  const [selectedIndicator, setSelectedIndicator] = useState(activeSection);

  useEffect(() => {
    if (activeSection) {
      setSelectedIndicator(activeSection);
    }
  }, [activeSection]);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100vh] w-full fixed z-[5000] right-0 top-0 text-black dark:text-white bg-white dark:bg-black"
    >
      <div className="box-border h-full p-12 flex flex-col justify-between ">
        <div className="flex flex-col text-[56px] gap-[12px] mt-[80px]">
          <div className="text-[rgb(153, 153, 153)] border-b-[1px] border-[rgb(153, 153, 153)] text-[11px] mb-[40px] font-black font-merrieweather uppercase text-xs">
            <p>Navigation</p>
          </div>
          {navItemsBurger.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.link}
                setSelectedIndicator={setSelectedIndicator}
                setIsActive={setIsActive}
              ></NavLink>
            );
          })}
        </div>

        <div className="flex w-full justify-between items-center">
          <FlipLink href="https://github.com/Ruumaa">Github</FlipLink>
          <FlipLink href="https://www.linkedin.com/in/titan-ramadhan">
            Linkedin
          </FlipLink>
          <FlipLink href="https://www.hackerrank.com/profile/titankalbuesa01">
            HackerRank
          </FlipLink>
          <ModeToggle text />
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

const NavLink = ({
  data,
  isActive,
  setSelectedIndicator,
  setIsActive,
}: any) => {
  const { name, link, index } = data;
  const { scrollToSection } = useScrollHook();

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(link);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="size-[10px] dark:bg-white bg-black rounded-full absolute left-[-30px]"
      ></motion.div>

      <Link
        href={link}
        onClick={(e) => {
          scrollToSection(e, link);
          setIsActive(false);
        }}
      >
        {name}
      </Link>
    </motion.div>
  );
};

export default Nav;
