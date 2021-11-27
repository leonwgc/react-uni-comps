import React from 'react';
declare type Props = {
    /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
    children: React.ReactElement;
    /** 动画时间,默认220ms */
    duration?: number;
    /** transition动画开始执行的类名，默认from */
    fromClass?: string;
    /** transition动画执行结束的类名，默认to*/
    toClass?: string;
};
/**
 *  子元素执行transition过渡动画
 *  fromClass定义初始状态类名，默认:from
 *  toClass 定义最终状态类名，默认:to
 *  执行时机:
 *  1.初次mount并在可视区域
 *  2.从不可见到可见状态
 */
declare const TransitionElement: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export default TransitionElement;
