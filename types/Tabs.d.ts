import React from 'react';
declare type TabsProp = {
    underline?: boolean /** 是否有下划线,默认true*/;
    underlineWidth?: string /** 下划线宽度,默认100% */;
    color?: string /** 主题色， 影响active tab标题颜色，和下划线颜色 */;
    children: React.ReactElement[];
    defaultIndex?: number /** 默认选择的tab,默认0,第一个 */;
    onIndexChange?: (index: number) => void /** index变化时触发的回调函数 */;
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
