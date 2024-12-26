import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useBgColor = () => {
  const { theme } = useTheme();
  const [hydrated, setHydrated] = useState(false);

  const bgColor = hydrated
    ? theme === 'dark'
      ? '#262626'
      : 'rgb(209 213 219)'
    : 'rgb(209 213 219)';

  const color = hydrated ? (theme === 'dark' ? 'white' : 'black') : 'black';

  useEffect(() => {
    setHydrated(true);
  }, []);
  return { bgColor, color };
};
