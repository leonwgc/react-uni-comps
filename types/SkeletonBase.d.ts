import React from 'react';
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */
declare const SkeletonBase: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 形状
     * @default rect
     * */
    shape?: 'rect' | 'circle';
} & React.RefAttributes<HTMLDivElement>>;
export default SkeletonBase;
