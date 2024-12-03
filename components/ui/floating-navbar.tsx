'use client';
import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { HoverBorderGradient } from './hover-border-gradient';
import { ModeToggle } from '@/app/components/Navbar/ModeToggle';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  // Scroll Direction Tracking
  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (current <= 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  // Refs untuk setiap section
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();

    // Aktifkan scroll-behavior smooth sementara
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';

    // Seleksi elemen dengan ID yang sesuai
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Nonaktifkan scroll-behavior setelah beberapa waktu
    setTimeout(() => {
      html.style.scrollBehavior = '';
    }, 500);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 backdrop-filter backdrop-blur-3xl bg-opacity-30',
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => scrollToSection(e, navItem.link)}
            className={cn(
              'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <ModeToggle />
        <HoverBorderGradient className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
          <span className="hidden sm:block">
            <Mail className="size-4" />
          </span>
          <span>Contact</span>
        </HoverBorderGradient>
      </motion.div>
    </AnimatePresence>
  );
};
