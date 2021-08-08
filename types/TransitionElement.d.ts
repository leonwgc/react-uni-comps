import React from 'react';
export declare type Props = {
    children: React.ReactElement /** 应用transition动画的元素 */;
    duration?: number /** transition动画的时间,单位ms */;
    transitionProp?: string /** transition动画prop */;
    timingFunc?: string /** transition动画的时间函数 */;
    delay?: number /** transition动画延时时间 ,单位ms*/;
    fromClass: 'from' /** transition动画开始执行的类名，默认会给元素加上from class,可以自定义类名 */;
    toClass: 'to' /** transition动画执行结束的类名，默认会给元素加上to class,可以自定义类名 */;
    once?: boolean /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/;
};
/** 给子元素添加初始加载过渡动画/不可见到可见状态的过渡动画 */
declare const TransitionElement: React.FC<Props>;
export default TransitionElement;
