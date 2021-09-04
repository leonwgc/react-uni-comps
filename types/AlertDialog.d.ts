import React, { HTMLAttributes } from 'react';
export declare type Props = {
    visible?: boolean;
    title?: React.ReactNode;
    content?: React.ReactNode;
    confirmText?: string;
    cancelText?: boolean;
    onConfirm?: () => void;
    /** 取消，关闭默认调用onClose */
    onClose?: () => void;
    closeOnMaskClick?: boolean;
    className?: string;
    /** 按钮间距，默认8 */
    buttonSpace?: number;
    /** 按钮宽度，默认62 */
    buttonWidth?: number;
    closable?: boolean;
    modal?: boolean;
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
