import React from 'react';
import { DateOrString } from './utils';
/** refer : zarm calendar (https://zarm.gitee.io/)  */
declare type Props = {
    /**  最小可选日期,默认当前日期*/
    min?: Date;
    /**  最大可选日期,默认min+1年*/
    max?: Date;
    /** 值,默认当前日期 */
    value?: Date | Date[] | DateOrString | DateOrString[];
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
    className?: string;
    style?: React.CSSProperties;
};
/** 移动端日历  */
declare const Calendar: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Calendar;
