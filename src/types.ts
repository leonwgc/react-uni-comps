import React from 'react';

export type ObjectType = Record<string, unknown>;

export type StringOrNumber = string | number;

export type NoOnChangeHtmlElement = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;

export type BaseProps = {
  style?: React.CSSProperties;
  className?: string;
};
