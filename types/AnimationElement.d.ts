import React from 'react';
export declare type Props = {
    children: React.ReactElement /** 应用动画的元素 */;
    duration?: string /** animation动画的持续时间,默认1s */;
    name: string /** animation动画 keyframe name, 默认none无动画 */;
    timingFunc?: string /** animation动画 animation-timing-function,默认 ease */;
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' /** animation动画 animation-direction ，默认 normal*/;
    delay?: string /** animation动画animation-delay， 默认0s */;
    fillMode?: 'none' | 'forwards' | 'backwards' | 'both' /** animation动画animation-fill-mode, 默认 backwards */;
    iterationCount?: 'infinite' | number /** animation动画 animation-iteration-count */;
    once?: boolean /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/;
};
/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
declare const AnimationElement: React.FC<Props>;
export default AnimationElement;
