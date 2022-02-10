import React from 'react';
declare type Props = {
    /** 分割线水平还是垂直 */
    type?: 'horizontal' | 'vertical';
    /** 分割线标题的位置 */
    textPosition?: 'left' | 'right' | 'center';
    className?: string;
    children?: React.ReactNode;
    /** 是否虚线 */
    dashed?: boolean;
    style?: React.CSSProperties;
    /**  分割线颜色，默认 #eee */
    color?: string;
};
/** 分割线 */
declare const Divider: React.FC<Props>;
export default Divider;
