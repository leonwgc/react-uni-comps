import React from 'react';
export declare type Props = {
    type?: 'horizontal' | 'vertical';
    textPosition?: 'left' | 'right' | 'center';
    className?: string;
    children?: React.ReactNode;
    dashed?: boolean;
    style?: React.CSSProperties;
    plain?: boolean;
    color?: string /** 默认 rgba(0, 0, 0, 0.06) */;
};
/** 分割线 */
declare const Divider: (props: Props) => React.ReactNode;
export default Divider;
