import React, { HTMLAttributes } from 'react';
export declare type Props = {
    type?: 'primary' | 'default' /** default 线框，primary 实色框 */;
    color?: string /** 线框/背景颜色 */;
    disabled?: boolean;
    style?: React.CSSProperties;
    block?: boolean;
    children?: React.ReactNode;
    href?: string;
    className?: string;
    circle?: boolean /** 圆形按钮 */;
    dashed?: boolean /** 虚线边 */;
    danger?: boolean /** 设置危险按钮 */;
    ghost?: boolean /** 是否幽灵按钮 */;
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
} & HTMLAttributes<HTMLButtonElement>;
/** 按钮 */
declare const Button: React.ForwardRefExoticComponent<{
    type?: 'primary' | 'default' /** default 线框，primary 实色框 */;
    color?: string /** 线框/背景颜色 */;
    disabled?: boolean;
    style?: React.CSSProperties;
    block?: boolean;
    children?: React.ReactNode;
    href?: string;
    className?: string;
    circle?: boolean /** 圆形按钮 */;
    dashed?: boolean /** 虚线边 */;
    danger?: boolean /** 设置危险按钮 */;
    ghost?: boolean /** 是否幽灵按钮 */;
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
} & React.HTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
