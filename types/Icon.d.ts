import React from 'react';
import type { BaseProps } from './types';
declare type Props = React.HtmlHTMLAttributes<HTMLSpanElement> & {
    /** 图标类型 */
    type: string;
} & BaseProps;
/** 图标 */
declare const Icon: React.ForwardRefExoticComponent<Props> & {
    /**
     * 加载iconfont.cn图标
     *
     * @param {string} scriptUrl
     */
    loadFromIconfontCN?: (scriptUrl: string) => void;
};
export default Icon;
