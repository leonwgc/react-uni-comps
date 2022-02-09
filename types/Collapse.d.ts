import React from 'react';
declare type KeysType = Array<string | number> | string | number;
declare type ItemProps = {
    /** 不可交互状态 */
    disabled?: boolean;
    /** 面板头内容 */
    title?: React.ReactNode | ((active: boolean, disabled: boolean) => React.ReactNode);
    /** 面板key */
    key?: string;
    /** 面板内容 */
    children?: React.ReactNode;
    /** 显示箭头:默认true */
    arrow?: boolean;
};
declare type CollapseProps = {
    /** 子元素*/
    children: React.ReactElement<ItemProps>[];
    /** 当前激活 tab 面板的 key, 如果是数组则可以展开多个项，否则只有一个展开项（手风琴模式） */
    keys?: KeysType;
    /** 切换面板的回调 */
    onChange?: (keys: KeysType) => void;
    className?: string;
    style?: React.CSSProperties;
    /** 展开动画, 默认false */
    animated?: boolean;
};
declare const _default: React.FC<CollapseProps> & {
    Item: (props: ItemProps) => React.ReactNode;
};
export default _default;
