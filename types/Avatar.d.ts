import React from 'react';
declare type Props = {
    /** 尺寸，默认40 */
    size?: number;
    /** 形状，默认circle */
    shape?: 'circle' | 'square';
    className?: string;
    style?: React.CSSProperties;
    /** 文字/icon/img */
    children?: React.ReactNode;
};
/** 头像 */
declare const Avatar: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
