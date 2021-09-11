import React from 'react';
declare type TabsProp = {
    /** 下划线宽度,默认100%,可以使用百分比和px*/
    underline?: string;
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
    disabled?: boolean;
    title: React.ReactNode;
    children: React.ReactElement;
};
/**
 *  选项卡项，放在Tabs里面
 *
 * @param {*} { children }
 * @return {*}
 */
declare const Tab: React.FC<TabProp>;
/**
 * 选项卡切换
 */
declare const Tabs: React.FC<TabsProp> & {
    Tab: typeof Tab;
};
export default Tabs;
