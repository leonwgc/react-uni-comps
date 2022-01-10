import React, { ReactNode } from 'react';
declare type Props = {
    content?: React.ReactNode;
    /** 模态, 默认true */
    modal?: boolean;
    visible: boolean;
    /** toast style */
    style?: React.CSSProperties;
    /** modal mask 样式 */
    maskStyle?: React.CSSProperties;
    /** className */
    className?: string;
};
/** 黑背景轻提示 */
declare const Toast: React.ForwardRefExoticComponent<Props> & {
    /** 黑背景提示,静态调用 */ show?: (props: ReactNode | {
        /** 内容 */
        content: React.ReactNode;
        /** 持续显示时间，默认1500ms */
        duration?: number;
        /** 模态, 默认true */
        modal?: boolean;
        className?: string;
        /** 容器样式 */
        style?: React.CSSProperties;
        /** 模态时 mask style */
        maskStyle: React.CSSProperties;
        afterClose?: () => void;
    }) => void;
};
export default Toast;
