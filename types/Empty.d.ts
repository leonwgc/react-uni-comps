import React from 'react';
declare type Props = {
    /** 图片下方的描述文字, default:暂无数据 */
    description?: React.ReactNode;
    /** 自定义图片 */
    image?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
/** 空状态 */
declare const Empty: React.FC<Props>;
export default Empty;
