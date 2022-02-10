import React from 'react';
/** 头像 */
declare const Avatar: React.ForwardRefExoticComponent<{
    /** 尺寸，默认40 */
    size?: number;
    /** 形状，默认circle */
    shape?: 'circle' | 'square';
    className?: string;
    style?: React.CSSProperties;
    /** 文字/icon/img 不设置，则为默认头像icon */
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
