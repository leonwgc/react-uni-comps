import React from 'react';
declare type Props = {
    /** 渲染子元素等待时间，单位ms,默认600 */
    wait?: number;
    /** 是否显示子元素 */
    visible: boolean;
    /** 子元素 */
    children: React.ReactNode;
};
/**  等待wait毫秒且visible是true才渲染子元素, 一般用于防止loading闪烁等问题 */
declare const WaitLoading: (props: Props) => React.ReactNode;
export default WaitLoading;
