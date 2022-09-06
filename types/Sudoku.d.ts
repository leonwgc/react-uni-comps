import React from 'react';
import { StringOrNumber, BaseProps } from './types';
declare type PrizeInfo = {
    /** 奖品id */
    id?: StringOrNumber;
    /** 奖品名称 */
    name: string;
    /** 奖品图片链接 */
    img?: string;
};
/** 9宫格抽奖 */
declare const Sudoku: React.ForwardRefExoticComponent<{
    /** 奖品列表 */
    prizeList?: Array<PrizeInfo>;
    /** 转盘指针 */
    pointer?: React.ReactNode;
    /**
     * 初始速度
     * @default 150
     *  */
    speed?: number;
    /**
     * 转动圈数
     * @default 30
     *  */
    round?: number;
    /**
     * 从后端拉取获奖索引,并开始转动
     */
    onStart?: (start: (index: number) => void) => void;
    /**
     * 转动结束,带上索引信息
     */
    onEnd?: (index: number) => void;
    /**
     * 间距
     * @default 4
     *  */
    gap?: number;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Sudoku;
