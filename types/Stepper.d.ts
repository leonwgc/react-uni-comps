import React from 'react';
export declare type Props = {
    /** 禁用 */
    disabled?: boolean;
    /** 值 */
    value?: number;
    /** 默认值 */
    defaultValue?: number;
    className?: string;
    style?: React.CSSProperties;
    /** 值变化时触发的回调函数 */
    onChange?: (value: number) => void;
    /** 最小值 */
    min?: number;
    /** 最大值 */
    max?: number;
    /** 每次改变步数，可以为小数 */
    step?: number;
};
/** 步进器 */
declare const Stepper: React.FC<Props>;
export default Stepper;
