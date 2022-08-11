import React, { RefAttributes } from 'react';
export declare type SigPadRef = {
    /** 获取图片dataURL字符串 */
    getData: () => string;
    /** 清空画布 */
    clear: () => void;
    /** 下载签名 */
    download: (fileName: string) => void;
};
declare type Props = React.HTMLAttributes<Element> & {
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
} & RefAttributes<SigPadRef>;
/** 签名 */
declare const Signature: React.ForwardRefExoticComponent<Pick<Props, "key" | "penColor" | keyof React.HTMLAttributes<Element> | "padColor"> & React.RefAttributes<SigPadRef>>;
export default Signature;
