import React, { ReactElement } from 'react';
declare type Props = {
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
declare const ThemeProvider: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default ThemeProvider;
