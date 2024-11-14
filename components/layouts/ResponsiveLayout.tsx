import { ReactNode } from 'react';

const ResponsiveLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-sm mx-auto md:max-w-2xl xl:max-w-6xl overflow-hidden h-full">
      {children}
    </div>
  );
};

export default ResponsiveLayout;
