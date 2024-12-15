import { ReactNode } from 'react';

const ResponsiveLayout = ({
  children,
  overflow,
}: {
  children: ReactNode;
  overflow?: boolean;
}) => {
  return (
    <div
      className={`w-full max-w-xs mx-auto md:max-w-2xl xl:max-w-6xl ${
        overflow ? 'overflow-hidden' : ''
      } h-full`}
    >
      {children}
    </div>
  );
};

export default ResponsiveLayout;
