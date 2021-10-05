import React from 'react';
declare type Props = {
    className?: string;
    style?: React.CSSProperties;
    /**
     * 水印之间的水平间距,d=24
     */
    gapX?: number;
    /**
     * 水印之间的垂直间距,d=48
     */
    gapY?: number;
    /**
     * 水印元素的z-index, d=2000
     */
    zIndex?: number;
    /**
     * 水印的宽度,d=120
     */
    width?: number;
    /**
     * 水印的高度,d=64
     */
    height?: number;
    /**
     * 水印绘制时，旋转的角度，d=-22
     */
    rotate?: number;
    /**
     * 高清印图片源, 为了高清屏幕显示，建议使用 2倍或3倍图，优先使用图片渲染水印。
     */
    image?: string;
    /**
     * 图片宽度,d=120
     */
    imageWidth?: number;
    /**
     * 图片高度,d=64
     */
    imageHeight?: number;
    /**
     * 水印文字内容
     */
    content?: string;
    /**
     * 文字颜色,d=rgba(0,0,0,.15)
     */
    fontColor?: string;
    /**
     * 文字样式,d=normal
     */
    fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
    /**
     * 文字族
     */
    fontFamily?: string;
    /**
     * 文字粗细,d=normal
     */
    fontWeight?: 'normal' | 'light' | 'weight' | number;
    /**
     * 文字大小,d=14
     */
    fontSize?: number | string;
};
/** 图片/文字水印 */
declare const WaterMark: {
    (props: Props): React.ReactNode;
    displayName: string;
};
export default WaterMark;
