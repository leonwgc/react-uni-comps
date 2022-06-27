import React from 'react';
export declare type Notice = {
    /** 公告内容 */
    text?: React.ReactNode;
    /** 链接 */
    link?: string;
};
/** 多条信息垂直滚动通知栏  */
declare const NoticeList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /** 公告内容 */
    list: Notice[];
    /**
     * 一条公告展示时间，单位ms
     * @default 3000
     *  */
    stayTime?: number;
    /** 图标 */
    icon?: React.ReactNode;
    /** 是否可关闭*/
    closeable?: boolean;
    /**额外操作区域，显示在关闭按钮左侧 */
    extra?: React.ReactNode;
    /** 关闭时的回调 */
    onClose?: () => void;
} & React.RefAttributes<HTMLDivElement>>;
export default NoticeList;
