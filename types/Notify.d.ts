import React, { ReactNode } from 'react';
import type { BaseProps } from './types';
declare type Props = {
    /** 内容 */
    content?: React.ReactNode;
} & BaseProps;
declare type StaticProps = ReactNode | {
    /** 内容 */
    content: React.ReactNode;
    /** 持续显示时间，默认2000ms */
    duration?: number;
    /** 内容样式 */
    style?: React.CSSProperties;
};
/** 顶部全局消息通知 */
declare const Notify: React.FC<Props> & {
    /**顶部全局消息通知静态调用  */ show?: (props: StaticProps) => void;
};
export default Notify;
