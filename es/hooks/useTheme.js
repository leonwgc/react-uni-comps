import React from 'react';
import useEventListener from './useEventListener';
import useMount from './useMount';
/**
 * 获得系统颜色模式
 * @returns 'light' | 'dark'
 */

var useTheme = function useTheme() {
  var _a = React.useState('light'),
      theme = _a[0],
      setTheme = _a[1];

  useMount(function () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
  useEventListener(function () {
    return window.matchMedia('(prefers-color-scheme: dark)');
  }, 'change', function (event) {
    if (event.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
  return theme;
};

export default useTheme;