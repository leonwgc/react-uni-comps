import React from 'react';
import type { BaseProps } from './types';
/** 按钮 */
declare const Button: React.ForwardRefExoticComponent<React.HtmlHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    /**
     * 类型
     * @default default
     *  */
    type?: 'primary' | 'default';
    /** 主题色线框风格 */
    outlined?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 块级按钮 */
    block?: boolean;
    children?: React.ReactNode;
    /** 圆形按钮 */
    circle?: boolean;
    /** 虚线边 */
    dashed?: boolean;
    /** 设置危险按钮 */
    danger?: boolean;
    /** 设置为展示的标签，比如div,a,button */
    as?: any;
    /** 设置按钮的图标组件 */
    icon?: React.ReactNode;
    /** 设置按钮加载状态 */
    loading?: boolean;
    /** 是否幽灵按钮 */
    ghost?: boolean;
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
    /** 点击回调 */
    onClick?: (e: React.SyntheticEvent) => void;
    /** 点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s  */
    wait?: number | boolean;
} & BaseProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
