'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Nav from './nav';

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="md:hidden fixed right-0 m-[20px] z-[5001] size-16 rounded-full cursor-pointer flex items-center justify-center align-center bg-transparent backdrop-filter backdrop-blur-2xl bg-opacity-50 border border-black/[0.2] dark:border-white/[0.2]"
      >
        <div
          className={`burger after:bg-black before:bg-black dark:after:bg-white dark:before:bg-white ${
            isActive &&
            'after:rotate-45 after:-top-[1px] before:-rotate-45 before:top-0'
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
