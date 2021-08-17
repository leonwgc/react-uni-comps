import React from 'react';
export declare type Props = {
    animate?: boolean /** 是否显示动画效果，默认显示 */;
    shape?: 'rect' | 'circle' /** 形状：默认 react */;
    height?: number | string /** 高度，默认16px */;
    width?: number | string /** 宽度 */;
} & React.HTMLAttributes<HTMLDivElement>;
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */
declare const SkeletonBase: React.ForwardRefExoticComponent<{
    animate?: boolean /** 是否显示动画效果，默认显示 */;
    shape?: 'rect' | 'circle' /** 形状：默认 react */;
    height?: number | string /** 高度，默认16px */;
    width?: number | string /** 宽度 */;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default SkeletonBase;
