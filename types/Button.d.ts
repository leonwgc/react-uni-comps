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
    height?: number /** 高度，默认32px */;
    circle?: boolean /** 圆形按钮 */;
    dashed?: boolean /** 虚线边 */;
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
} & HTMLAttributes<HTMLButtonElement>;
/** 按钮 */
declare const Button: (props: Props) => React.ReactElement;
export default Button;
