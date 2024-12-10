'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <Button
      onClick={handleClick}
      variant={'ghost'}
      className=" hover:bg-inherit transition-colors hover:text-black/[0.4] dark:hover:text-[#D7D8D9] p-1"
    >
      <Sun className="size-[1.2rem] stroke-[3px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-500 inline-block" />
      <Moon className="absolute size-[1.2rem] stroke-[3px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100  duration-500 inline-block" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
