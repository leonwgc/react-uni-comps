import React from 'react';
export declare type ObjectType = Record<string, unknown>;
export declare type StringOrNumber = string | number;
export declare type NoOnChangeHtmlElement = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;
export declare type BaseProps = {
    style?: React.CSSProperties;
    className?: string;
};
