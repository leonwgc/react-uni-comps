import React from 'react';
export declare type Props = {
    wait?: number /** 渲染spinner前等待时间, default 600ms，时间到了并且visible为true才显示spinner子元素 */;
    visible: boolean /** 是否显示spinner */;
    children: React.ReactElement /** spinner 子元素 */;
};
/**  等待wait毫秒如果visible是true才渲染子元素,包裹spinner可以防止spinner闪烁 */
declare const WaitLoading: React.FC<Props>;
export default WaitLoading;
