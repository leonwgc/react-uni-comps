import React, { useLayoutEffect } from 'react';
import * as vars from './vars';
import { ThemeProvider as StyledProvider } from 'styled-components';
import useTheme from './hooks/useTheme';

type Props = {
  /** 主题色 */
  color?: string;
  children: any;
};

/**
 * @description 主题色设置
 * @param {Props} props
 * @return {*}
 */
const ThemeProvider = (props: Props) => {
  const { color = vars.primary, children } = props;
  const theme = useTheme();

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--uc-color', color);
    document.documentElement.setAttribute('data-theme-color', color);
  }, [color]);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme-mode', theme);
  }, [theme]);

  return <StyledProvider theme={{ color, theme }}>{children}</StyledProvider>;
};

ThemeProvider.displayName = 'UC-ThemeProvider';

export default ThemeProvider;
