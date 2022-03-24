import React from 'react';
import { Props as PopupProps } from './Popup';
declare type Props = Omit<PopupProps, 'position'> & {
    /** 头部 */
    header?: React.ReactNode;
    /** 尾部 */
    footer?: React.ReactNode;
    /** 是否显示右上角关闭 */
    closable?: boolean;
};
/** 对话框,基于Popup */
declare const Modal: React.FC<Props>;
export default Modal;
