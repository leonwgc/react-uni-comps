import React from 'react';
/** 按钮 */
declare const Button: React.ForwardRefExoticComponent<{
    /** default 线框，primary 实色框 */
    type?: 'primary' | 'default';
    disabled?: boolean;
    style?: React.CSSProperties;
    /** 块级按钮 */
    block?: boolean;
    children?: React.ReactNode;
    className?: string;
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
} & React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
