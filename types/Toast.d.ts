import React from 'react';
import type { BaseProps } from './types';
export declare type Props = {
    /** 内容 */
    content?: React.ReactNode;
    /**
     * 是否模态
     * @default true
     */
    modal?: boolean;
    visible?: boolean;
    /** mask 样式 */
    maskStyle?: React.CSSProperties;
} & BaseProps;
declare type StaticToastProps = React.ReactNode | {
    /** 内容 */
    content: React.ReactNode;
    /** 持续显示时间，默认1500ms */
    duration?: number;
    /** 模态, 默认true */
    modal?: boolean;
    /** toast class */
    className?: string;
    /** 内容样式, 应用于StyledToast */
    style?: React.CSSProperties;
    /** 模态时 mask style */
    maskStyle: React.CSSProperties;
    /** 隐藏后的回调函数 */
    afterClose?: () => void;
};
/** 轻提示 */
declare const Toast: React.FC<Props> & {
    /** 轻提示静态调用 */ show: (props: StaticToastProps) => void;
    /** 轻提示静态关闭 */ hide: () => void;
};
export default Toast;
