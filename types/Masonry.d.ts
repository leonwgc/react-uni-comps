import React from 'react';
import type { BaseProps } from './types';
/** 瀑布流布局 */
declare const Masonry: React.ForwardRefExoticComponent<{
    /**
     * 数据列之间的间隔
     *
     * @default 10
     */
    columnGap?: number;
    /**
     * 渲染的列数
     *
     * @default 2
     */
    columnCount?: number;
    /**
     * 数据行之间的间隔
     *
     * @default 10
     */
    rowGap?: number;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Masonry;
