import React from 'react';
import type { BaseProps } from './types';
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */
declare const SkeletonBase: React.ForwardRefExoticComponent<{
    /**
     * 是否显示动画效果
     * @default true
     *  */
    animated?: boolean;
    /**
     * 形状
     * @default rect
     * */
    shape?: 'rect' | 'circle';
    /**
     * 高度
     * @default 16
     *  */
    height?: number | string;
    /** 宽度 */
    width?: number | string;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default SkeletonBase;
