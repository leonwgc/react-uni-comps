import React from 'react';
declare type TabProp = {
    disabled?: boolean;
    title: React.ReactNode;
    children: React.ReactElement;
};
declare const Tab: React.FC<TabProp>;
declare type TabsProp = {
    lineWidth?: number | string /** 下划线宽度 */;
    themeColor?: string /** 主题色， 影响active tab标题颜色，和下划线颜色 */;
    children: React.ReactElement[];
    defaultIndex?: number /** 默认选择的tab,默认0,第一个 */;
    [p: string]: unknown;
} & React.HTMLAttributes<HTMLElement>;
declare const Tabs: React.FC<TabsProp> & {
    Tab: typeof Tab;
};
export default Tabs;
