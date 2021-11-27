import React, { ReactElement, useLayoutEffect } from 'react';
import * as vars from './vars';
import { ThemeProvider as StyledProvider } from 'styled-components';

type Props = {
  /** 主题色 */
  color?: string;
  children: ReactElement;
};

/**
 * 主题色设置
 *
 * @export
 * @param {{
 *   color: string;
 *   children: ReactElement;
 * }} {
 *   color = colors.primary,
 *   children,
 * }
 * @return {*}  {React.ReactElement}
 */
const ThemeProvider = (props: Props): React.ReactElement => {
  const { color = vars.primary, children } = props;

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--uc-color', color);
  }, [color]);

  return <StyledProvider theme={{ color }}>{children}</StyledProvider>;
};

ThemeProvider.displayName = 'UC-ThemeProvider';

export default ThemeProvider;
