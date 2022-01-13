import React from 'react';
declare type Props = {
    /** 生成二维码文本 */
    text: string;
    /** 二维码颜色,默认#000 */
    colorDark?: string;
    /** 二维码背景颜色,默认#fff */
    colorLight?: string;
    /** 二维码宽高,默认128px */
    size?: number;
    className?: string;
    style?: React.CSSProperties;
};
/** 二维码 */
declare const QRCode: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default QRCode;
