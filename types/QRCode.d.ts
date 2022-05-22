import React from 'react';
import type { BaseProps } from './types';
/** 二维码 */
declare const QRCode: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /** 生成二维码文本 */
    text: string;
    /**
     * 二维码颜色
     * @default #000
     *  */
    colorDark?: string;
    /**
     *  二维码背景颜色
     * @default #fff
     */
    colorLight?: string;
    /**
     *  二维码宽高
     * @default 128
     */
    size?: number;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default QRCode;
