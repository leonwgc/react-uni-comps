import React from 'react';
declare type Props = {
    accept?: string;
    onChange?: (files: FileList) => void;
    disabled?: false;
    multiple?: false;
    capture?: 'user' | 'environment';
    style?: React.CSSProperties;
    className?: string;
} & React.HTMLAttributes<HTMLInputElement>;
/** 弹出选择文件窗口, 代替input.file使用，表层是div,可自定义样式，也可包裹一个组件,按包裹组件呈现 */
declare const FileInputTrigger: (props: Props) => React.ReactElement;
export default FileInputTrigger;
