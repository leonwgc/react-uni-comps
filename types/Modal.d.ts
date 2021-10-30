import React from 'react';
import { Props as PopupProps } from './Popup';
declare type Props = PopupProps & {
    /** 头部 */
    header?: React.ReactNode;
    /** 尾部 */
    footer?: React.ReactNode;
    /** 内容 */
    children?: React.ReactNode;
    /** 包裹元素样式 */
    wrapStyle?: React.CSSProperties;
    /** 是否显示右上角关闭 */
    closable?: boolean;
    wrapClassName?: string;
};
/** 对话框 */
declare const Modal: {
    (props: Props): React.ReactNode;
    displayName: string;
};
export default Modal;
