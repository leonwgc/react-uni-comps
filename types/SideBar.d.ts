import React from 'react';
import type { StringOrNumber } from './types';
declare type ItemProps = {
    /** 禁用 */
    disabled?: boolean;
    /** 标题 */
    title?: React.ReactNode;
    /** 配置项key */
    key?: StringOrNumber;
};
declare type SideBarProps = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
    /** 选择的index,非受控模式使用*/
    defaultIndex?: number;
    /** 选择的index, 默认 0 */
    index?: number;
    /** index变化时触发的回调函数 */
    onChange?: (index: number) => void;
    /** 配置项列表 */
    items: Array<ItemProps>;
    style?: React.CSSProperties;
    className?: string;
};
/**
 * 侧边导航
 */
declare const SideBar: React.FC<SideBarProps>;
export default SideBar;
