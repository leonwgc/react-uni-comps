import React from 'react';
declare type Props = {
    content?: React.ReactNode;
    /** 模态 */
    modal?: boolean;
    visible: boolean;
};
/** 黑背景提示 */
declare const Toast: {
    (props: Props): React.ReactElement;
    /** 黑背景提示,静态调用 */
    show(content: string, duration?: number, modal?: boolean): void;
    displayName: string;
};
export default Toast;
