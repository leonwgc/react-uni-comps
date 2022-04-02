import React from 'react';
import type { BaseProps } from './types';
/** 触发文件上传 */
declare const FileInputTrigger: React.ForwardRefExoticComponent<{
    /** 允许上传的文件格式 */
    accept?: string;
    /** 值变化时触发的回调函数 */
    onChange?: (files: FileList) => void;
    /** 是否禁用 */
    disabled?: boolean;
    /** 布尔值，如果出现，则表示用户可以选择多个文件 */
    multiple?: boolean;
    /** 捕获图像或视频数据的源 */
    capture?: 'user' | 'environment';
} & Omit<React.HTMLAttributes<HTMLElement>, "onChange"> & BaseProps & React.RefAttributes<HTMLInputElement>>;
export default FileInputTrigger;
