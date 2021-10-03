import React from 'react';
declare type Props = {
    /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
    children: React.ReactElement;
    /** from到to动画执行的时间,单位ms,默认240ms */
    duration?: number;
    /** transition动画开始执行的类名，默认from */
    fromClass?: string;
    /** transition动画执行结束的类名，默认to*/
    toClass?: string;
};
/** 子元素执行从from到to类名过渡 */
declare const TransitionElement: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default TransitionElement;
