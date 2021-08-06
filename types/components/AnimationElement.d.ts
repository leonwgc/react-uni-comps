import React from 'react';
export declare type Props = {
    children: React.ReactElement /** 应用animation动画的元素 */;
    duration?: number /** animation动画的持续时间 */;
    name: string /** animation动画 keyframe name */;
    timingFunc?: string /** animation动画 animation-timing-function*/;
    direction?: string /** animation动画 animation-direction */;
    delay?: number /** animation动画animation-delay*/;
    fillMode?: string /** animation动画animation-fill-mode */;
    iterationCount?: string | number /** animation动画 animation-iteration-count */;
};
/** 子元素进入视口应用animation动画,不在视口则停止动画 */
declare const AnimationElement: React.FC<Props>;
export default AnimationElement;
