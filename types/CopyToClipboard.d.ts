import React from 'react';
declare type Props = {
    /** 要复制的文本 */
    text: string;
    /** 复制成功的回调 */
    onCopy?: () => void;
    /** 包裹的元素,只能一个 */
    children: React.ReactElement;
};
/** 复制文本到剪贴板 */
declare const CopyToClipboard: React.ForwardRefExoticComponent<Props & React.RefAttributes<React.ReactElement<any, string | React.JSXElementConstructor<any>>>>;
export default CopyToClipboard;
