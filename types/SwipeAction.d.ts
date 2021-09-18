import React from 'react';
declare type openType = 'left' | 'right';
declare type Action = {
    text: string;
    color?: string;
    onClick?: () => void;
};
declare type Props = {
    left?: Action[];
    right?: Action[];
    children: React.ReactNode;
    onOpen: (type: openType) => void;
    onClose: (type: openType) => void;
    /** 点击按钮后是否自动关闭,默认true */
    autoClose?: boolean;
    /** 点击外部区域关闭,默认true*/
    closeOnClickOutside?: boolean;
};
/** SwipeAction 滑动操作 */
declare const SwipeAction: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default SwipeAction;
