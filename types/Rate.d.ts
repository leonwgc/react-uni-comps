import React from 'react';
import type { NoOnChangeHtmlElement } from './types';
/** 评分 */
declare const Rate: React.ForwardRefExoticComponent<{
    /** 是否允许再次点击后清除*/
    allowClear?: boolean;
    /**是否允许半选 */
    allowHalf?: boolean;
    /** 自定义字符 */
    char?: React.ReactNode;
    /** star 总数   */
    count?: number;
    /**默认数，非受控 */
    defaultValue?: number;
    /**只读 */
    readonly?: boolean;
    /**当前数，受控 */
    value?: number;
    /**选择回调 */
    onChange?: (value: number) => void;
    className?: string;
} & NoOnChangeHtmlElement & React.RefAttributes<HTMLDivElement>>;
export default Rate;
