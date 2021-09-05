import React, { ReactElement, useEffect } from 'react';
import * as colors from './colors';
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
  const { color = colors.primary, children } = props;

  useEffect(() => {
    document.documentElement.style.setProperty('--uc-color', color);
  }, [color]);

  return <StyledProvider theme={{ color }}>{children}</StyledProvider>;
};

ThemeProvider.displayName = 'UC-ThemeProvider';

export default ThemeProvider;
