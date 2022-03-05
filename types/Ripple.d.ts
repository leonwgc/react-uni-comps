import React from 'react';
/** 波纹效果,给子元素添加点击波纹效果 */
declare const Ripple: React.ForwardRefExoticComponent<{
    className?: string;
    style?: React.CSSProperties;
    /** 波纹效果背景色,默认 #ccc */
    color?: string;
    children?: React.ReactNode;
    /** 波纹起始缩放大小,默认0.3 */
    startScale?: number;
    /** 动画持续时间,默认300 */
    duration?: number;
    /** 100% 宽度 */
    block?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Ripple;
