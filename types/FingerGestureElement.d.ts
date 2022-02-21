import React from 'react';
/** 给子元素添加手势操作 */
declare const FingerGestureElement: React.ForwardRefExoticComponent<{
    /** 手势操作元素,如果是组件，需要forwardRef到dom */
    children: React.ReactElement;
} & Partial<{
    onTouchStart: (evt: React.SyntheticEvent<Element, Event>) => void;
    onTouchMove: (evt: React.SyntheticEvent<Element, Event>) => void;
    onTouchEnd: (evt: React.SyntheticEvent<Element, Event>) => void;
    onTouchCancel: (evt: React.SyntheticEvent<Element, Event>) => void;
    onMultipointStart: (evt: React.SyntheticEvent<Element, Event>) => void;
    onMultipointEnd: (evt: React.SyntheticEvent<Element, Event>) => void;
    onDoubleTap: () => void;
    onLongTap: () => void;
    onSingleTap: () => void;
    onRotate: (evt: React.SyntheticEvent<Element, Event> & {
        angle: number;
    }) => void;
    onPinch: (evt: React.SyntheticEvent<Element, Event> & {
        scale: number;
    }) => void;
    onPressMove: (evt: React.SyntheticEvent<Element, Event> & {
        deltaX: number;
        deltaY: number;
    }) => void;
    onSwipe: (evt: React.SyntheticEvent<Element, Event> & {
        direction: "left" | "right" | "down" | "up";
    }) => void;
    onTwoFingerPressMove: (evt: React.SyntheticEvent<Element, Event> & {
        deltaX: number;
        deltaY: number;
    }) => void;
}> & React.RefAttributes<HTMLElement>>;
export default FingerGestureElement;
