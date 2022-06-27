import React from 'react';
/** 复制文本*/
declare const CopyToClipboard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /** 要复制的文本 */
    text: string;
    /** 复制成功的回调 */
    onCopy?: () => void;
    /** 包裹的元素 */
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default CopyToClipboard;
