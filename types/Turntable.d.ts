import React from 'react';
import { StringOrNumber, BaseProps } from './types';
declare type PrizeInfo = {
    /** 奖品id */
    id: StringOrNumber;
    /** 奖品名称 */
    name: string;
    /** 奖品图片链接 */
    img: string;
    /** 扇形背景色 */
    color?: string;
};
/** turntable */
declare const Turntable: React.ForwardRefExoticComponent<{
    prizeList?: Array<PrizeInfo>;
    /**
     * 抽奖宽度
     * @default 300
     */
    width?: StringOrNumber;
    /**
     * 抽奖高度
     * @default 300
     */
    height?: StringOrNumber;
    /** 转动圈数 */
    turnsNumber?: number;
    /**
     * 每一个扇形的外边框颜色
     * @default #ff9800
     */
    borderColor?: string;
    /**
     * 转动需要持续的时间(秒)
     * @default 5
     */
    turnsTime?: number;
    /** 转盘指针 */
    pointer?: React.ReactNode;
    /**
     * 从后端拉取获奖索引,并开始转动
     */
    onStart?: () => Promise<number>;
    /**
     * 转动结束,带上索引信息
     */
    onEnd?: (index: number) => void;
    /**
     * 抽奖次数
     * @default 1
     */
    times?: number;
    /**
     * 剩余抽奖次数为0 回调
     * @default 1
     */
    onNoTimes?: () => void;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default Turntable;
