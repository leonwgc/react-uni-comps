import React from 'react';
/** 通告栏  */
declare const NoticeBar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /** 公告内容 */
    content: string;
    /**
     * 开始滚动的延迟，单位 ms
     * @default 2000
     *  */
    delay?: number;
    /** 广播图标 */
    icon?: React.ReactNode;
    /**
     * 滚动速度，单位 px/s
     * @default 50
     *  */
    speed?: number;
    /** 是否可关闭*/
    closeable?: boolean;
    /**额外操作区域，显示在关闭按钮左侧 */
    extra?: React.ReactNode;
    /** 关闭时的回调 */
    onClose?: () => void;
} & React.RefAttributes<HTMLDivElement>>;
export default NoticeBar;
