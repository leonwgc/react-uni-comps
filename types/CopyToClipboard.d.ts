import React from 'react';
declare type Props = {
    /** 要复制的文本 */
    text: string;
    /** 复制成功的回调 */
    onCopy?: () => void;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};
/** 复制文本*/
declare const CopyToClipboard: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default CopyToClipboard;
