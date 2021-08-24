import React from 'react';
export declare type Props = {
    /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
    children: React.ReactElement;
    /** from到to动画执行的时间,单位ms,默认240ms */
    duration?: number;
    /** transition动画开始执行的类名，默认会给元素加上from class,可以自定义类名 */
    fromClass?: 'from';
    /** transition动画执行结束的类名，默认会给元素加上to class,可以自定义类名 */
    toClass?: 'to';
    /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/
    once?: boolean;
};
/** 子元素执行从from到to类名切换(过渡时间由duration定义) 定义这两个css类名，应用transition过渡 */
declare const TransitionElement: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default TransitionElement;
