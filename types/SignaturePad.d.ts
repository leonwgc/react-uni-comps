import React from 'react';
declare type Props = {
    /** 横屏书写模式 */
    landscape?: boolean;
    padColor: '';
    penColor: '';
    className?: string;
    style: React.CSSProperties;
};
declare type RefObject = {
    getDataUrl: () => string;
    clear: () => void;
};
/** 签名面板 */
declare const SignaturePad: React.ForwardRefExoticComponent<Props & React.RefAttributes<RefObject>>;
export default SignaturePad;
