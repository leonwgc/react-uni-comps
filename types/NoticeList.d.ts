import React from 'react';
declare type Notice = {
    text: string;
    link: string;
};
/** 多条信息垂直滚动通知栏  */
declare const NoticeList: React.ForwardRefExoticComponent<{
    /** 公告内容 */
    list: Notice[];
    /** 一条公告展示时间，默认3000ms */
    stayTime?: number;
    /** 广播图标, 可以使用 SoundOutlined @ant-design/icons */
    icon?: React.ReactNode;
    /** 是否可关闭 ，默认false*/
    closeable?: boolean;
    /**额外操作区域，显示在关闭按钮左侧 */
    extra?: React.ReactNode;
    /** 关闭时的回调 */
    onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default NoticeList;
