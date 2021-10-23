import React from 'react';
/** 箭头 */
declare const IconArrow: React.ForwardRefExoticComponent<{
    /** 大小, 默认16 */
    size?: number;
    /** 颜色 */
    color?: string;
    style?: React.CSSProperties;
    className?: string;
    /** 箭头方向，默认朝下 */
    direction: 'right' | 'bottom' | 'left' | 'top';
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default IconArrow;
