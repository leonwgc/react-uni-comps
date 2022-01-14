import React from 'react';
/** 箭头 */
declare const IconArrow: React.ForwardRefExoticComponent<{
    style?: React.CSSProperties;
    className?: string;
    /** 箭头方向，默认朝下 */
    direction?: 'right' | 'bottom' | 'left' | 'top' | string;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default IconArrow;
