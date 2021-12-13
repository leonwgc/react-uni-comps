import React, { RefAttributes } from 'react';
declare type SigPadRefProps = {
    getData: () => string;
    clear: () => void;
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
declare const Signature: React.ForwardRefExoticComponent<Pick<Props, "style" | "key" | "className" | "penColor" | "padColor"> & React.RefAttributes<SigPadRefProps>>;
export default Signature;
