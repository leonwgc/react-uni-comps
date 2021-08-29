import React from 'react';
export declare type Props = {
    /** 大小, 默认16 */
    size?: number;
    /** 颜色 */
    color?: string;
    /** 箭头方向，默认朝下 */
    direction: 'right' | 'bottom' | 'left' | 'top';
};
/** 勾勾 */
declare const IconArrow: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default IconArrow;