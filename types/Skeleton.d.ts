import React from 'react';
declare type Props = {
    /** loading结束渲染的元素 */
    children?: React.ReactElement;
    /** 是否显示动画效果，默认显示 */
    animated?: boolean;
    /** 几行，默认4行, 最小1行 */
    row?: number;
    /** 每一行宽度，默认 ['40%','100%','100%','60%']，设置为string,则每一行都一样长 */
    rowWidth?: string | string[];
    /** 矩形条高度,默认16px*/
    rowHeight?: number;
    /** 是否显示头像，默认不显示 */
    avatar?: boolean;
    /** 头像大小，默认32px */
    avatarSize?: number;
    /** loading为true显示骨架，false则显示子元素*/
    loading?: boolean;
} & React.HTMLAttributes<HTMLElement>;
/** 骨架屏 */
declare const Skeleton: React.FC<Props>;
export default Skeleton;
