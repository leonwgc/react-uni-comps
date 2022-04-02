import React from 'react';
import type { BaseProps } from './types';
/** 显示1px的边 */
declare type Position = 'top' | 'right' | 'bottom' | 'left' | 'all';
/** 移动端1像素边框容器 */
declare const HairLineBox: React.ForwardRefExoticComponent<{
    /**
     * 显示1px的边
     * @default bottom
     */
    position?: Position;
    /**
     * 边的颜色
     * @default #dcdcdc
     */
    color?: string;
    /**
     * 圆角
     * @default 0
     * */
    borderRadius?: number;
    /**
     * 只在移动端显示
     * @default true
     *  */
    mobile?: boolean;
} & BaseProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default HairLineBox;
