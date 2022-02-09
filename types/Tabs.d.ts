import React from 'react';
declare type TabsProp = {
    /** 下划线宽度,默认100%,可以使用百分比/px/true/false */
    underline?: string | boolean;
    /** Tabs.Tab子元素*/
    children: React.ReactElement[];
    /** 选择的tab index,非受控模式使用*/
    defaultValue?: number;
    /** 选择的tab index,0 */
    value?: number;
    /** 是否支持滑动切换(移动端)*/
    swipe?: boolean;
    /** index变化时触发的回调函数 */
    onChange?: (index: number) => void;
    /** 头部右侧区域内容 */
    extra?: React.ReactNode;
    /** 是否显示border,默认显示 */
    border?: boolean;
} & React.HTMLAttributes<HTMLElement>;
declare type TabProp = {
    /** 禁用 */
    disabled?: boolean;
    /** 标题 */
    title?: React.ReactNode;
    /** 内容 */
    children?: React.ReactNode;
};
declare const _default: React.FC<TabsProp> & {
    Tab: React.FC<TabProp>;
};
export default _default;
