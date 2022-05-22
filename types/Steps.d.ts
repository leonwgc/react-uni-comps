import React from 'react';
import type { BaseProps } from './types';
export declare type Step = {
    /** 标题 */
    title?: React.ReactNode;
    /** 步骤的详情描述 */
    description?: React.ReactNode;
    /** 步骤图标的类型 */
    icon?: React.ReactNode;
};
/** 步骤条 */
declare const Steps: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /** 步骤数据 */
    steps: Step[];
    /**
     * 指定当前步骤
     * @default 0
     */
    current?: number;
    /**
     * 指定步骤条方向
     * @default horizontal
     *  */
    direction?: 'horizontal' | 'vertical';
    /**
     * 实心圈风格
     * @default false
     *  */
    dotStyle?: boolean;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Steps;
