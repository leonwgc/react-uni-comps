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
    /** 确认回调 */
    onConfirm?: () => void;
    /** 取消，关闭默认调用onClose */
    onClose?: () => void;
    /** 取消回调 */
    onCancel?: () => void;
    /** 点击遮罩是否关闭,默认false*/
    closeOnMaskClick?: boolean;
    className?: string;
    /** 按钮间距，默认16 */
    buttonSpace?: number;
    /** 按钮宽度，默认80 */
    buttonWidth?: number;
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
};
declare type AlertDialogType = React.ForwardRefExoticComponent<Props> & {
    /**
     *  AlertDialog静态调用
     *
     * @param {*} title 标题
     * @param {*} content 内容
     * @param {string} [confirmText='确定'] 确定按钮文本
     * @param {*} onConfirm 确定回调
     * @param {*} cancelText 取消文本
     * @param {*} onCancel 取消回调
     * @param {*} wrapStyle 弹框样式
     * @return {*}
     */ show?: (title?: React.ReactNode, content?: React.ReactNode, confirmText?: string, onConfirm?: () => void, cancelText?: string, onCancel?: () => void, wrapStyle?: React.CSSProperties) => void;
};
/** 移动端/pc端两种风格的 alert/confirm弹窗 */
declare const AlertDialog: AlertDialogType;
export default AlertDialog;
