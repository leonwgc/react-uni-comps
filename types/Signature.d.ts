import React, { RefAttributes } from 'react';
declare type SigPadRefProps = {
    /** 获取图片dataURL字符串 */
    getData: () => string;
    /** 清空画布 */
    clear: () => void;
    /** 下载签名 */
    download: (fileName: string) => void;
};
declare type Props = {
    /** 画布背景色 */
    padColor: '';
    /** 画笔颜色 */
    penColor: '';
    className?: string;
    style?: React.CSSProperties;
} & RefAttributes<SigPadRefProps>;
/** 签名 */
declare const Signature: React.ForwardRefExoticComponent<Pick<Props, "style" | "className" | "key" | "penColor" | "padColor"> & React.RefAttributes<SigPadRefProps>>;
export default Signature;
