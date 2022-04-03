import React, { RefAttributes } from 'react';
import type { BaseProps } from './types';
export declare type SigPadRef = {
    /** 获取图片dataURL字符串 */
    getData: () => string;
    /** 清空画布 */
    clear: () => void;
    /** 下载签名 */
    download: (fileName: string) => void;
};
declare type Props = {
    /**
     * 画布背景色
     * @default #fff
     *  */
    padColor?: string;
    /**
     * 画笔颜色
     * @default #000
     *  */
    penColor?: string;
} & BaseProps & RefAttributes<SigPadRef>;
/** 签名 */
declare const Signature: React.ForwardRefExoticComponent<Pick<Props, "key" | keyof BaseProps | "penColor" | "padColor"> & React.RefAttributes<SigPadRef>>;
export default Signature;
