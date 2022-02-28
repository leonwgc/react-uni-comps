import React from 'react';
import type { NoOnChangeHtmlElement } from './types';
declare type ItemProp = {
    /** 禁用 */
    disabled?: boolean;
    /** 标题 */
    title?: React.ReactNode;
    /** 内容 */
    children?: React.ReactNode;
};
declare type TabsProp = {
    /** 下划线宽度,默认50%,可以使用百分比/px/true/false */
    underline?: string | boolean;
    /** Tabs.Tab子元素*/
    children: React.ReactElement<ItemProp>[];
    /** 选择的tab index,非受控模式使用*/
    defaultValue?: number;
    /** 选择的tab index, 默认 0 */
    value?: number;
    /** 是否支持滑动切换*/
    swipe?: boolean;
    /** index变化时触发的回调函数 */
    onChange?: (index: number) => void;
    /** 头部右侧区域内容 */
    extra?: React.ReactNode;
    /** 是否显示border,默认显示 */
    border?: boolean;
} & NoOnChangeHtmlElement;
declare const _default: React.FC<TabsProp> & {
    Tab: React.FC<ItemProp>;
};
export default _default;
