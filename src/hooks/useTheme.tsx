import React from 'react';
import useEventListener from './useEventListener';
import useMount from './useMount';

export type Theme = 'light' | 'dark';

/**
 * 获得系统颜色模式
 * @returns 'light' | 'dark'
 */
const useTheme = () => {
  const [theme, setTheme] = React.useState<Theme>('light');

  useMount(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });

  useEventListener(
    () => window.matchMedia('(prefers-color-scheme: dark)'),
    'change',
    (event: any) => {
      if (event.matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  );

  return theme;
};

export default useTheme;
