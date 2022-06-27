import React from 'react';
import type { StringOrNumber } from './types';
declare type ItemProp = {
    /** 禁用 */
    disabled?: boolean;
    /** 标题 */
    title?: React.ReactNode;
    /** 内容 */
    children?: React.ReactNode;
};
declare type TabsProp = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
    /** 下划线宽度,可以使用百分比/px/true/false */
    underline?: StringOrNumber | boolean;
    /** 选择的tab index,非受控模式使用*/
    defaultValue?: number;
    /** 选择的tab index */
    value?: number;
    /** index变化时触发的回调函数 */
    onChange?: (index: number) => void;
    /** 头部右侧区域内容 */
    extra?: React.ReactNode;
    /**
     * 是否显示border
     * @default true
     *  */
    border?: boolean;
    /**
     * tab标题宽度
     */
    tabWidth?: StringOrNumber;
};
declare const _default: React.FC<TabsProp> & {
    Tab: React.FC<ItemProp>;
};
export default _default;
