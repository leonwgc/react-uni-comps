import React, { HTMLAttributes } from 'react';
import type { BaseProps } from './types';
declare type Props = {
    /** 图标类型 */
    type: string;
} & BaseProps & HTMLAttributes<HTMLSpanElement>;
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
