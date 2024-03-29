import React from 'react';

export type ObjectType = Record<string, any>;

export type StringOrNumber = string | number;

export type NoOnChangeHtmlElement = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;

export type BaseProps = {
  /** 样式设置 */
  style?: React.CSSProperties;
  /** 样式类名设置 */
  className?: string;
  children?: React.ReactNode;
};

/** Mount container type  */
export type TargetElementType = Element | (() => Element) | React.MutableRefObject<Element>;

export type EventTargetType =
  | EventTarget
  | React.MutableRefObject<EventTarget>
  | (() => EventTarget);

export type Func = () => void;
