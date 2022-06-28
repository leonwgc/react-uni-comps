import React from 'react';
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * count of rows
     * @default 3
     *  */
    rowCount?: number;
    /**
     * row width，set to string ,each row width set to the same
     *
     * @default ['40%', '100%', '60%']
     */
    rowWidth?: string | string[];
    /** 矩形条高度
     * @default 16
     */
    rowHeight?: number;
    /**
     * show avatar on the left side if avatar > 0
     * @default 0
     *  */
    avatar?: number;
};
/** 骨架屏 */
declare const Skeleton: React.FC<Props>;
export default Skeleton;
