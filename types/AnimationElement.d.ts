import React from 'react';
export declare type Props = {
    /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
    children: React.ReactElement;
    /** animation动画的持续时间,默认1s */
    duration?: string;
    /** keyframe name, 默认none无动画 */
    name: string;
    /** animation动画 animation-timing-function,默认 ease */
    timingFunc?: string;
    /** animation动画 animation-direction ，默认 normal*/
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    /** animation动画animation-delay， 默认0s */
    delay?: string;
    /** animation动画animation-fill-mode, 默认 backwards */
    fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
    /** animation动画 animation-iteration-count,默认1 */
    iterationCount?: 'infinite' | number;
    /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行动画*/
    once?: boolean;
};
/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
declare const AnimationElement: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default AnimationElement;
