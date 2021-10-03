import React from 'react';
declare type Props = {
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
};
/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
declare const AnimationElement: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default AnimationElement;
