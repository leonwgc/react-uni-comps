import React from 'react';
declare type Props = {
    className?: string;
    style?: React.CSSProperties;
    /** 波纹效果背景色,默认 currentColor */
    color?: string;
    children?: React.ReactNode;
};
/** 波纹效果,给子元素添加点击波纹效果 */
declare const Ripple: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Ripple;
