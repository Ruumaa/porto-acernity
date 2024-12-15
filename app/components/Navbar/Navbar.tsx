'use client';

import { FloatingNav } from '@/components/ui/floating-navbar';

const Navbar = () => {
  const navItems = [
    { name: 'Home', link: '#hero' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
  ];

  return (
    <>
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>
    </>
  );
};

export default Navbar;
