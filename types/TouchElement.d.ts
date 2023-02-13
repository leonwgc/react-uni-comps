import * as React from 'react';
/** 给子元素添加手势操作 */
declare const TouchElement: React.ForwardRefExoticComponent<{
    /** 手势操作元素,如果是组件，需要forwardRef到dom */
    children: React.ReactElement;
} & Partial<{
    onTouchStart: (evt: import("w-touch/types/Touch").WTouchEvent) => void;
    onTouchMove: (evt: import("w-touch/types/Touch").WTouchEvent) => void;
    onTouchEnd: (evt: import("w-touch/types/Touch").WTouchEvent) => void;
    onTouchCancel: (evt: import("w-touch/types/Touch").WTouchEvent) => void;
    onMultipointStart: (evt: import("w-touch/types/Touch").WTouchEvent) => void;
    onMultipointEnd: (evt: import("w-touch/types/Touch").WTouchEvent) => void;
    onDoubleTap: () => void;
    onLongTap: () => void;
    onSingleTap: () => void;
    onRotate: (evt: import("w-touch/types/Touch").WTouchEvent & {
        angle: number;
    }) => void;
    onPinch: (evt: import("w-touch/types/Touch").WTouchEvent & {
        scale: number;
    }) => void;
    onPressMove: (evt: import("w-touch/types/Touch").WTouchEvent & {
        deltaX: number;
        deltaY: number;
    }) => void;
    onSwipe: (evt: import("w-touch/types/Touch").WTouchEvent & {
        direction: "left" | "right" | "down" | "up";
    }) => void;
    onTwoFingerPressMove: (evt: import("w-touch/types/Touch").WTouchEvent & {
        deltaX: number;
        deltaY: number;
    }) => void;
}> & React.RefAttributes<Element>>;
export default TouchElement;
