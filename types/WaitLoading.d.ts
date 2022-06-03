import React from 'react';
declare type Props = {
    /**
     * 延迟渲染时间
     * @default 400 ms
     * */
    wait?: number;
    children?: React.ReactElement;
};
/** 延迟渲染子元素, 用于防止loading闪烁等问题 */
declare const WaitLoading: React.FC<Props>;
export default WaitLoading;
