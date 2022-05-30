import React from 'react';

export type ObjectType = Record<string, unknown>;

export type StringOrNumber = string | number;

export type NoOnChangeHtmlElement = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;

export type BaseProps = {
  /** 样式设置 */
  style?: React.CSSProperties;
  /** 样式类名设置 */
  className?: string;
  children?: React.ReactNode;
};

export type TargetElementType =
  | HTMLElement
  | (() => HTMLElement)
  | React.MutableRefObject<HTMLElement>;
