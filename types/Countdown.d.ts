import React from 'react';
import type { BaseProps } from './types';
/**
 * 倒计时
 * @param props
 * @returns
 */
declare const Countdown: React.ForwardRefExoticComponent<{
    /**
     * 倒计时时间
     */
    value: Date;
    /**
     * 倒计时达到触发
     */
    onFinish?: () => void;
    /**
     * 是否返回毫秒
     *
     */
    millisec?: boolean;
    /**
     * 倒计时信息
     *
     */
    children?: (date: {
        day: number;
        hour: number;
        min: number;
        sec: number;
        millisec: number;
    }) => React.ReactNode;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Countdown;
