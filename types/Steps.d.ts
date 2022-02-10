import React from 'react';
export declare type Step = {
    /** 标题 */
    title?: React.ReactNode;
    /** 步骤的详情描述 */
    description?: React.ReactNode;
    /** 步骤图标的类型 */
    icon?: React.ReactNode;
};
declare type Props = {
    /** 步骤数据 */
    steps: Step[];
    /** 指定当前步骤，从 0 开始记数 */
    current?: number;
    className?: string;
    style?: React.CSSProperties;
    /** 指定步骤条方向 */
    direction?: 'horizontal' | 'vertical';
    /** 实心圈风格 */
    dotStyle?: boolean;
};
/** 步骤条 */
declare const Steps: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Steps;
