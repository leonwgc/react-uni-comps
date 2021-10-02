import React, { HTMLAttributes } from 'react';
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
    cancelText?: boolean;
    /** 确认回调 */
    onConfirm?: () => void;
    /** 取消，关闭默认调用onClose */
    onClose?: () => void;
    /** 取消回调 */
    onCancel?: () => void;
    closeOnMaskClick?: boolean;
    className?: string;
    /** 按钮间距，默认8 */
    buttonSpace?: number;
    /** 按钮宽度，默认62 */
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
} & HTMLAttributes<HTMLElement>;
/** 移动端/pc端两种风格的 alert/confirm弹窗 */
declare const AlertDialog: {
    (props: Props): React.ReactElement;
    displayName: string;
    /**
     *
     *
     * @param {*} title
     * @param {*} content
     * @param {string} [confirmText='确定']
     * @param {*} onConfirm ()=>void
     * @param {*} cancelText
     * @return {*}
     */
    show(title: any, content: any, confirmText: string, onConfirm: any, cancelText: any): void;
};
export default AlertDialog;
