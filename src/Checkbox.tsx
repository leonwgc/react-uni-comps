import React, { HTMLAttributes } from 'react';
import CheckboxBase from './CheckboxBase';

type Props = {
  /** 按钮风格，默认false */
  button?: boolean | 'fill' | 'outline';
  /** box宽高，默认18 */
  size?: number;
  /** checked状态改变回调 */
  onChange?: (checked: boolean) => void;
  /** 受控模式下的默认值 */
  checked?: boolean;
  /** 非受控模式下的默认值 */
  defaultChecked?: boolean;
  /** 禁用 */
  disabled?: boolean;
  /** 右侧内容 */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** 设置 indeterminate 状态，中间横线代替勾勾 */
  indeterminate?: boolean;
} & Omit<React.HTMLAttributes<HTMLElement>, 'onChange'>;

/** 复选框 */
const Checkbox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <CheckboxBase {...props} mode="checkbox" ref={ref} />;
});

Checkbox.displayName = 'UC-Checkbox';

export default Checkbox;
