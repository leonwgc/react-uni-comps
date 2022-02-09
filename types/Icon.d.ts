import React, { HTMLAttributes } from 'react';
declare type Props = {
    className?: string;
    style?: React.CSSProperties;
    /** 图标类型 */
    type: string;
} & HTMLAttributes<HTMLElement>;
declare type IconBase = {
    /**
     * 加载在 iconfont.cn 上的图标
     *
     * @param {string} scriptUrl
     */
    loadFromIconfontCN: (scriptUrl: string) => void;
};
declare type IconType = IconBase & React.FC<Props>;
/** 图标 */
declare const Icon: IconType;
export default Icon;
