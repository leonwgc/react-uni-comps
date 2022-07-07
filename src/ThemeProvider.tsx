import React, { useLayoutEffect } from 'react';
import * as vars from './vars';
import { ThemeProvider as StyledProvider } from 'styled-components';

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

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--uc-color', color);
  }, [color]);

  return <StyledProvider theme={{ color }}>{children}</StyledProvider>;
};

ThemeProvider.displayName = 'UC-ThemeProvider';

export default ThemeProvider;
