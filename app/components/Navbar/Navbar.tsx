'use client';

import { FloatingNav } from '@/components/ui/floating-navbar';

const Navbar = () => {
  const navItems = [
    { name: 'Home', link: '/#hero' },
    { name: 'About', link: '/#about' },
    { name: 'Projects', link: '/#projects' },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  );
};

export default Navbar;
