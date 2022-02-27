import React from 'react';
declare type ItemProp = {
    /** 禁用 */
    disabled?: boolean;
    /** 标题 */
    title?: React.ReactNode;
};
/**
 *  侧边导航项，放在SideBar里面
 *
 * @param {*} { children }
 * @return {*}
 */
declare const Item: React.FC<ItemProp>;
declare type SideBarProps = {
    /** sidebar.Item子元素*/
    children: React.ReactElement<typeof Item>[];
    /** 选择的tab index,非受控模式使用*/
    defaultIndex?: number;
    /** 选择的tab index, 默认 0 */
    index?: number;
    /** index变化时触发的回调函数 */
    onChange?: (index: number) => void;
    style?: React.CSSProperties;
    className?: string;
} & React.HTMLAttributes<HTMLElement>;
declare const _default: React.FC<SideBarProps> & {
    Item: React.FC<ItemProp>;
};
export default _default;
