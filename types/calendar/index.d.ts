import React from 'react';
import type { DateOrString } from './utils';
import type { BaseProps } from '../types';
/** refer : zarm calendar (https://zarm.gitee.io/)  */
export declare type ValueType = Date | Date[] | DateOrString | DateOrString[];
/** 移动端日历  */
declare const Calendar: React.ForwardRefExoticComponent<{
    /**  最小可选日期,默认当前日期*/
    min?: DateOrString;
    /**  最大可选日期,默认min+1年*/
    max?: DateOrString;
    /** 值,默认当前日期 */
    value?: ValueType;
    /** 日期选择发生变化时触发的回调函数 */
    onChange?: (value?: Date | Date[]) => void;
    /** 是否选择一段时间范围,默认false */
    range?: boolean;
    /** 自定义日期渲染函数 */
    dateRender?: (date?: Date) => void;
    /** 日期是否禁止选择 */
    disabledDate?: (date?: Date) => boolean;
    /** 语言,默认中文 */
    locale?: 'zh' | 'en';
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Calendar;
