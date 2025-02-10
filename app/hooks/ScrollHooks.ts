import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useScrollHook = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;
      setVisible(current <= 0.05 || direction < 0);
    }
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
      }
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();

    if (target === '#start') {
      return scrollToTop();
    }

    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';

    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      html.style.scrollBehavior = '';
    }, 500);
  };

  return { scrollToSection, visible, activeSection };
};
