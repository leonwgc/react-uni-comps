import React from 'react';
import type { Props as PopupProps } from './Popup';
declare type Action = {
    /** 标题  */
    text?: React.ReactNode;
    /** 是否为禁用状态  */
    disabled?: boolean;
    /** 描述 */
    description?: React.ReactNode;
    /** 颜色 */
    color?: string;
    /** 点击回调 */
    onClick?: () => void;
};
declare type Props = {
    /** 面板选项列表   */
    actions?: Action[];
    /** 顶部的额外区域   */
    extra?: React.ReactNode;
    /** 取消按钮文字，如果设置为空则不显示取消按钮   */
    cancelText?: string;
} & Omit<PopupProps, 'position' | 'flip' | 'children'>;
/** 动作面板 */
declare const ActionSheet: React.FC<Props>;
export default ActionSheet;
