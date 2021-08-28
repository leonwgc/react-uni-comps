import React from 'react';
declare type TabsProp = {
    /** 是否有下划线,默认true*/
    underline?: boolean;
    /** 下划线宽度,默认100%,可以使用百分比和px */
    underlineWidth?: string;
    /** Tabs.Tab子元素*/
    children: React.ReactElement[];
    /** 默认选择的tab,默认0,第一个 */
    defaultIndex?: number;
    /** index变化时触发的回调函数 */
    onIndexChange?: (index: number) => void;
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
 *
 * @param {*} {
 *   children,
 *   color = colors.primary,
 *   underlineWidth = '100%',
 *   defaultIndex = 0,
 *   underline = true,
 *   onIndexChange,
 *   className,
 *   ...otherProps
 * }
 * @return {*}
 */
declare const Tabs: React.FC<TabsProp> & {
    Tab: typeof Tab;
};
export default Tabs;
