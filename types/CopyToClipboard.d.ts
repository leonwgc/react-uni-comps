import React from 'react';
import type { BaseProps } from './types';
/** 复制文本*/
declare const CopyToClipboard: React.ForwardRefExoticComponent<{
    /** 要复制的文本 */
    text: string;
    /** 复制成功的回调 */
    onCopy?: () => void;
    children?: React.ReactNode;
    onClick?: () => void;
} & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default CopyToClipboard;
