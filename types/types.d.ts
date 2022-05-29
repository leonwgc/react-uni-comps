import React from 'react';
export declare type ObjectType = Record<string, unknown>;
export declare type StringOrNumber = string | number;
export declare type NoOnChangeHtmlElement = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;
export declare type BaseProps = {
    /** 样式设置 */
    style?: React.CSSProperties;
    /** 样式类名设置 */
    className?: string;
    children?: React.ReactNode;
};
export declare type PropsElementType = HTMLElement | (() => HTMLElement) | React.MutableRefObject<HTMLElement>;
