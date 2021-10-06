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
    /** 弹出动画时间，默认280ms */
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
};
/** 弹框，可以从上，下，左，右，中间弹出 */
declare const Popup: (props: Props) => React.ReactElement;
export default Popup;
