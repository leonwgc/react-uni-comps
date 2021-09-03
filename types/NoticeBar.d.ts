import React, { HTMLAttributes } from 'react';
export declare type Props = {
    /** 公告内容 */
    content: string;
    /** 开始滚动的延迟，单位 ms, 默认2000 */
    delay?: number;
    /** 广播图标, 可以使用 SoundOutlined @ant-design/icons */
    icon?: React.ReactNode;
    /** 滚动速度，单位 px/s, 默认50 */
    speed?: number;
    /** 是否可关闭 ，默认false*/
    closeable?: boolean;
    /**额外操作区域，显示在关闭按钮左侧 */
    extra?: React.ReactNode;
    /** 关闭时的回调 */
    onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;
/** 通告栏  */
declare const NoticeBar: React.ForwardRefExoticComponent<{
    /** 公告内容 */
    content: string;
    /** 开始滚动的延迟，单位 ms, 默认2000 */
    delay?: number;
    /** 广播图标, 可以使用 SoundOutlined @ant-design/icons */
    icon?: React.ReactNode;
    /** 滚动速度，单位 px/s, 默认50 */
    speed?: number;
    /** 是否可关闭 ，默认false*/
    closeable?: boolean;
    /**额外操作区域，显示在关闭按钮左侧 */
    extra?: React.ReactNode;
    /** 关闭时的回调 */
    onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default NoticeBar;
