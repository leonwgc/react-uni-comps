import React from 'react';
declare type Props = {
    /** 图标*/
    icon?: React.ReactNode;
    /** 内容 */
    content?: React.ReactNode;
    /** 内容样式 */
    style?: React.CSSProperties;
    /** wrap class */
    className?: string;
};
declare type StaticProps = {
    /** 图标*/
    icon?: React.ReactNode;
    /** 内容 */
    content: React.ReactNode;
    /** 持续显示时间，默认2000ms */
    duration?: number;
    /** 内容样式 */
    style?: React.CSSProperties;
};
/** 顶部全局消息通知 */
declare const Notify: React.ForwardRefExoticComponent<Props> & {
    /**顶部全局消息通知静态调用  */ show?: (props: StaticProps) => void;
};
export default Notify;
