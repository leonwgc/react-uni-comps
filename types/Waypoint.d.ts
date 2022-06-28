import React from 'react';
/** 路标,可见性发生变化执行回调 */
declare const Waypoint: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    /** 可见回调 */
    onVisible?: (el: HTMLElement) => void;
    /** 不可见回调 */
    onInVisible?: (el: HTMLElement) => void;
} & React.RefAttributes<HTMLSpanElement>>;
export default Waypoint;
