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
     * @default #eee
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
} & React.RefAttributes<HTMLDivElement>>;
export default HairLineBox;
