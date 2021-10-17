import React from 'react';
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
declare type StaticToastProps = {
    /** 内容 */
    content: React.ReactNode;
    /** 持续显示时间，默认2000ms */
    duration?: number;
    /** 模态, 默认true */
    modal?: boolean;
    /** toast class */
    className?: string;
    /** 内容样式, 应用于StyledToast */
    style?: React.CSSProperties;
    /** 模态时 mask style */
    maskStyle: React.CSSProperties;
};
/** 黑背景轻提示 */
declare const Toast: React.ForwardRefExoticComponent<Props> & {
    /** 黑背景提示,静态调用 */ show?: (props: StaticToastProps) => void;
};
export default Toast;
