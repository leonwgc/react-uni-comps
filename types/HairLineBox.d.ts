import React from 'react';
/** 显示1px的边 */
declare type Position = 'top' | 'right' | 'bottom' | 'left' | 'all';
/** 移动端1像素边框容器 */
declare const HairLineBox: React.ForwardRefExoticComponent<{
    /** 显示1px的边，默认为 bottom 底部,为all则显示4条边 */
    position?: Position;
    /** 边的颜色,默认 #dcdcdc */
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    /** 圆角,默认0*/
    borderRadius?: number;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default HairLineBox;
