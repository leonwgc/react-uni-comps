import React from 'react';
export declare type Props = {
    children: React.ReactNode /** loading结束渲染的元素 */;
    animate?: boolean /** 是否显示动画效果，默认显示 */;
    row: number /** 几行，默认4行, 最小2行 */;
    rowWidth: string | string[] /** 每一行宽度，默认 ['40%','100%','100%','60%']，设置为string,则每一行都一样长 */;
    rowHeight: number /** 矩形条高度,默认16px*/;
    avatar?: boolean /** 是否显示头像，默认不显示 */;
    avatarSize?: number /** 头像大小，默认32px */;
    loading?: boolean /** loading为true显示骨架，false则显示子元素*/;
} & React.HTMLAttributes<HTMLElement>;
/** 骨架屏 */
declare const Skeleton: (props: Props) => React.ReactNode;
export default Skeleton;
