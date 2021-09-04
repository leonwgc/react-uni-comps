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
    /** 是否幽灵按钮 */
    ghost?: boolean;
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
} & React.HTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
