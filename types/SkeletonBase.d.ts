import React from 'react';
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */
declare const SkeletonBase: React.ForwardRefExoticComponent<{
    /** 是否显示动画效果，默认显示 */
    animated?: boolean;
    /** 形状：默认 react */
    shape?: 'rect' | 'circle';
    /** 高度，默认16px */
    height?: number | string;
    /** 宽度 */
    width?: number | string;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default SkeletonBase;
