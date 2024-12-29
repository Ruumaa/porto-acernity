import ResponsiveLayout from '@/components/layouts/ResponsiveLayout';
import React from 'react';

const StickyWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative border-white/[0.2]  dark:border-black/[0.1] border border-t bg-black dark:bg-[#F0f0f0] text-[#F0f0f0] dark:text-black overflow-x-hidden ">
      <ResponsiveLayout>
        <div
          className="relative h-[254px]  md:h-56"
          style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
          <div className="relative h-[calc(100vh+254px)]  md:h-[calc(100vh+224px)] -top-[100vh]">
            <div className="h-[254px] md:h-56 sticky top-[calc(100vh-254px)] md:top-[calc(100vh-224px)]">
              {children}
            </div>
          </div>
        </div>
      </ResponsiveLayout>
    </div>
  );
};

export default StickyWrapper;
