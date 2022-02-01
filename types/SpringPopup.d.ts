import React from 'react';
export declare type Props = {
    /** 是否可见 */
    visible?: boolean;
    /**  关闭回调 */
    onClose?: () => void;
    /** 是否显示遮罩，默认显示 */
    mask?: boolean;
    /** 遮罩样式 */
    maskStyle?: React.CSSProperties;
    /** 遮罩class*/
    maskClass?: string;
    /** 弹框弹出位置，从上，下，左，右，中间 弹出 */
    position: 'top' | 'bottom' | 'left' | 'center' | 'right';
    /** 弹出动画时间，默认160ms */
    duration?: number;
    /** 弹框mount位置，默认为document.body */
    mountContainer?: () => HTMLElement;
    /** 弹框里面的内容 */
    children?: React.ReactNode;
    /** 弹框style */
    style?: React.CSSProperties;
    /** 弹框className */
    className?: string;
    /** 点击遮罩是否关闭,默认true*/
    closeOnMaskClick?: boolean;
    /** pc端从点击元素飞出动画效果，默认true */
    flip?: boolean;
    /** 展开动画, 默认true */
    animated?: boolean;
};
/**
 *
 * Spring动画弹层，从上，下，左，右，中间弹出
 *
 *  无须直接使用->
 *  对话框请使用 Modal
 *  上下左右滑出请使用 Drawer
 *
 */
declare const SpringPopup: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default SpringPopup;
