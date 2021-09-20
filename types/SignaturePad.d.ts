import React, { RefAttributes } from 'react';
declare type SigPadRefProps = {
    getData: () => string;
    clear: () => void;
};
declare type Props = {
    padColor: '';
    penColor: '';
    className?: string;
    style: React.CSSProperties;
} & RefAttributes<SigPadRefProps>;
/** 签名面板 */
declare const SignaturePad: React.ForwardRefExoticComponent<Pick<Props, "style" | "className" | "key" | "padColor" | "penColor"> & React.RefAttributes<SigPadRefProps>>;
export default SignaturePad;
