import React from 'react';
import type { BaseProps } from './types';
/** 图片查看器 */
declare const ImageViewer: React.ForwardRefExoticComponent<{
    /** 是否可见 */
    visible?: boolean;
    /**  关闭回调 */
    onClose?: () => void;
    /** 图片资源的 url 列表 */
    images?: string[] | string;
    /** 切换图片时触发 */
    onIndexChange?: (index: number) => void;
    /** 遮罩样式 */
    maskStyle?: React.CSSProperties;
    /**
     * 是否显示导航按钮
     * @default false
     */
    showPrevNextButton?: boolean;
    /**
     * 上一张文本
     *
     */
    prev?: React.ReactNode;
    /**
     * 下一张文本
     *
     */
    next?: React.ReactNode;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default ImageViewer;
