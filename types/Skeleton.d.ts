import React from 'react';
import type { StringOrNumber } from './types';
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 行数
     * @default 3
     *  */
    rowCount?: number;
    /**
     * 行宽
     *
     * @default ['40%', '100%', '60%']
     */
    rowWidth?: StringOrNumber | StringOrNumber[];
    /**
     * 行高
     * @default 12
     */
    rowHeight?: StringOrNumber;
    /**
     * 左侧显示圆形的尺寸，不设置不显示
     *  */
    round?: StringOrNumber;
};
/** 骨架屏, 包行两种风格, 基于SkeletonElement封装 */
declare const Skeleton: React.FC<Props>;
export default Skeleton;
