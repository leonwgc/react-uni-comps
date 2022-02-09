import React from 'react';
declare type Props = {
    /** 滚动数字 */
    number: number;
    /** 延迟开始时间,默认200ms */
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
};
/** 滚动数字 */
declare const RollingNumber: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>>;
export default RollingNumber;
