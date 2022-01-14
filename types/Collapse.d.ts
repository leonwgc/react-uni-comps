import React from 'react';
declare type CollapseProps = {
    /** 子元素*/
    children: typeof Item[];
    /** 当前激活 tab 面板的 key, 如果是数组则可以展开多个项，否则只有一个展开项（手风琴模式） */
    keys?: string[] | string;
    /** 切换面板的回调 */
    onChange?: (keys: string[] | string) => void;
    className?: string;
    style?: React.CSSProperties;
};
/**
 *  子项，放在Collapse里面
 *
 * @param {*} { children }
 * @return {*}
 */
declare const Item: ({ children }: {
    children: any;
}) => any;
/**
 * 折叠面板
 */
declare const Collapse: React.FC<CollapseProps> & {
    Item: typeof Item;
};
export default Collapse;
