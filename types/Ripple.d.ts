import React from 'react';
declare type Props = {
    className?: string;
    style?: React.CSSProperties;
    /** 波纹效果背景色,默认 #ccc */
    color?: string;
    children?: React.ReactNode;
    /** 波纹起始缩放大小,默认0.2 */
    startScale?: number;
    /** 动画持续时间,默认300 */
    duration?: number;
};
/** 波纹效果,给子元素添加点击波纹效果 */
declare const Ripple: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Ripple;
