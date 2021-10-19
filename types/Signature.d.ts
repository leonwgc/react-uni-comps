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
/** 签名 */
declare const Signature: React.ForwardRefExoticComponent<Pick<Props, "style" | "className" | "key" | "padColor" | "penColor"> & React.RefAttributes<SigPadRefProps>>;
export default Signature;