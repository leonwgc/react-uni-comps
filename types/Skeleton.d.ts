import React from 'react';
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /** loading结束渲染的元素 */
    children?: React.ReactNode;
    /**
     * 是否显示动画效果
     * @default true
     * */
    animated?: boolean;
    /**
     * 几行，默认4行, 最小1行
     * @default 4
     *  */
    row?: number;
    /** 每一行宽度，默认 ['40%','100%','100%','60%']，设置为string,则每一行都一样长 */
    rowWidth?: string | string[];
    /** 矩形条高度 */
    rowHeight?: number;
    /**
     * 是否显示头像
     * @default false
     * */
    avatar?: boolean;
    /**
     * 头像大小
     * @default 32
     *  */
    avatarSize?: number;
    /** loading为true显示骨架，false则显示子元素*/
    loading?: boolean;
};
/** 骨架屏 */
declare const Skeleton: React.FC<Props>;
export default Skeleton;
