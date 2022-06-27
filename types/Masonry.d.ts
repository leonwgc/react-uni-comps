import React from 'react';
/** 瀑布流布局 */
declare const Masonry: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
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
} & React.RefAttributes<HTMLDivElement>>;
export default Masonry;
