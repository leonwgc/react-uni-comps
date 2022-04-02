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
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default ImageViewer;
