import React from 'react';
/** 移动端1像素边框容器 */
declare const HairLineBox: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 显示1px的边
     * @default bottom
     */
    position?: 'top' | 'right' | 'bottom' | 'left' | 'all';
    /**
     * 边的颜色
     * @default #d9d9d9
     */
    color?: string;
    /**
     * 圆角
     * @default 0
     * */
    borderRadius?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default HairLineBox;
