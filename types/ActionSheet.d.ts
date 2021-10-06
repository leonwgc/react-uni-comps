import React, { HTMLAttributes } from 'react';
declare type Action = {
    text: string;
    disabled?: boolean;
    description?: string;
    color?: string;
    onClick?: () => void;
};
declare type Props = {
    /** 显示隐藏   */
    visible: boolean;
    /** 面板选项列表   */
    actions: Action[];
    /** 顶部的额外区域   */
    extra?: React.ReactNode;
    /** 取消按钮文字，如果设置为空则不显示取消按钮   */
    cancelText?: string;
    /** 关闭时触发   */
    onClose?: () => void;
    /** 点击遮罩是否关闭,默认true*/
    closeOnMaskClick?: boolean;
} & HTMLAttributes<HTMLElement>;
/** 动作面板 */
declare const ActionSheet: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default ActionSheet;
