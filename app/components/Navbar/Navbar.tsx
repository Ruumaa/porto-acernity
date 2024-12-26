'use client';

import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from './NavItems';

const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>
    </>
  );
};

export default Navbar;
