import React from 'react';
declare type Props = {
    /** 是否显示 */
    visible?: boolean;
    /** 标题 */
    title?: React.ReactNode;
    /** 内容  */
    content?: React.ReactNode;
    /** 确认文本 */
    confirmText?: string;
    /** 取消文本 */
    cancelText?: string;
    /** 点击确定回调，参数为关闭函数 */
    onConfirm?: (close: () => void) => void;
    /** 取消，关闭默认调用onClose */
    onClose?: () => void;
    /** 取消回调，参数为关闭函数 */
    onCancel?: (close: () => void) => void;
    /** 点击遮罩是否关闭,默认false*/
    closeOnMaskClick?: boolean;
    className?: string;
    /** 按钮间距，默认16 */
    buttonSpace?: number;
    closable?: boolean;
    /** 弹框mount位置，默认为document.body */
    mountContainer?: () => HTMLElement;
    /** 是否显示遮罩，默认显示 */
    mask?: boolean;
    /** 遮罩样式 */
    maskStyle?: React.CSSProperties;
    /** 遮罩class*/
    maskClass?: string;
    /** 弹框样式 */
    wrapStyle?: React.CSSProperties;
    /** 透传给 pc confirm button  */
    wait?: number | boolean;
    /** 关闭后卸载组件,默认true*/
    unmountOnExit?: boolean;
};
declare type StaticProps = {
    /** 标题 */
    title?: React.ReactNode;
    /** 内容 */
    content?: React.ReactNode;
    /** 确定按钮文本 */
    confirmText?: string;
    /** 点击确定回调，参数为关闭函数 */
    onConfirm?: (close: () => void) => void;
    /** 取消文本 */
    cancelText?: string;
    /** 取消回调，参数为关闭函数 */
    onCancel?: (close: () => void) => void;
    /** 弹框样式 */
    wrapStyle?: React.CSSProperties;
    /** 透传给button  */
    wait?: number | boolean;
    /** 显示关闭按钮  */
    closable?: boolean;
};
declare type AlertDialogType = React.ForwardRefExoticComponent<Props> & {
    /**
     *  AlertDialog静态调用
     *
     */ show?: (prop: StaticProps) => void;
};
/** 移动端/pc端两种风格的 alert/confirm弹窗 */
declare const AlertDialog: AlertDialogType;
export default AlertDialog;
