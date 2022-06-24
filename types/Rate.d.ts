import React from 'react';
/** 评分 */
declare const Rate: React.ForwardRefExoticComponent<{
    /**
     * 是否允许再次点击后清除
     * @default true
     */
    allowClear?: boolean;
    /**是否允许半选 */
    allowHalf?: boolean;
    /** 自定义字符 */
    char?: React.ReactNode;
    /**
     * star总数
     * @default 5
     *    */
    count?: number;
    /** 默认数，非受控 */
    defaultValue?: number;
    /**只读 */
    readonly?: boolean;
    /** 当前数，受控 */
    value?: number;
    /** 评分回调 */
    onChange?: (value: number) => void;
    /**
     * 评分颜色
     * @default #ffd21e
     *   */
    color?: string;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Rate;
