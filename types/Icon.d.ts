import React from 'react';
declare type Props = {
    className?: string;
    style?: React.CSSProperties;
    /** 图标类型 */
    type: string;
};
/** 图标 */
declare const Icon: React.ForwardRefExoticComponent<Props> & {
    /**
     * 加载在 iconfont.cn 上自行管理的图标
     *
     * @param {string} scriptUrl
     */
    loadFromIconfontCN?: (scriptUrl: string) => void;
};
export default Icon;
