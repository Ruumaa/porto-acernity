import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useScrollHook = () => {
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Refs untuk setiap section
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();

    if (target === '#start') {
      return scrollToTop();
    }

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

  return { scrollToSection, visible };
};
