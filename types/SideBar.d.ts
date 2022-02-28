import React from 'react';
import type { StringOrNumber, NoOnChangeHtmlElement } from './types';
declare type Item = {
    /** 禁用 */
    disabled?: boolean;
    /** 标题 */
    title?: React.ReactNode;
    /** 配置项key */
    key?: StringOrNumber;
};
declare type SideBarProps = NoOnChangeHtmlElement & {
    /** 选择的index,非受控模式使用*/
    defaultIndex?: number;
    /** 选择的index, 默认 0 */
    index?: number;
    /** index变化时触发的回调函数 */
    onChange?: (index: number) => void;
    /** 配置项列表 */
    items: Array<Item>;
    style?: React.CSSProperties;
    className?: string;
};
/**
 * 侧边导航
 */
declare const SideBar: React.FC<SideBarProps>;
export default SideBar;
