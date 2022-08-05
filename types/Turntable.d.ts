import React from 'react';
import { StringOrNumber, BaseProps } from './types';
declare type PrizeInfo = {
    /** 奖品id */
    id?: StringOrNumber;
    /** 奖品名称 */
    name: string;
    /** 奖品图片链接 */
    img?: string;
    /** 扇形背景色 */
    color?: string;
};
/** 转盘抽奖 */
declare const Turntable: React.ForwardRefExoticComponent<{
    /** 奖品列表 */
    prizeList?: Array<PrizeInfo>;
    /**
     * 转动圈数
     * @default 5
     *  */
    round?: number;
    /**
     * 每一个扇形的外边框颜色
     * @default #ff9800
     */
    borderColor?: string;
    /**
     * 转动需要持续的时间(秒)
     * @default 5
     */
    duration?: number;
    /** 转盘指针 */
    pointer?: React.ReactNode;
    /**
     * 从后端拉取获奖索引,并开始转动
     */
    onStart?: (start: (index: number) => void) => void;
    /**
     * 转动结束,带上索引信息
     */
    onEnd?: (index: number) => void;
    /**
     * 宽高
     * @default 300
     */
    size?: number;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Turntable;
