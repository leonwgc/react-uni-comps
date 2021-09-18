import React from 'react';
/** 手势操作元素 */
declare const FingerGestureElement: React.ForwardRefExoticComponent<{
    children: React.ReactElement;
} & Partial<Partial<{
    onTouchStart: (evt: React.SyntheticEvent<Element, Event>) => void;
    onTouchMove: (evt: React.SyntheticEvent<Element, Event>) => void;
    onTouchEnd: (evt: React.SyntheticEvent<Element, Event>) => void;
    onTouchCancel: (evt: React.SyntheticEvent<Element, Event>) => void;
    onMultipointStart: (evt: React.SyntheticEvent<Element, Event>) => void;
    onMultipointEnd: (evt: React.SyntheticEvent<Element, Event>) => void;
    onTap: () => void;
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
        direction: "left" | "right" | "up" | "down";
    }) => void;
    onTwoFingerPressMove: () => void;
}>> & React.RefAttributes<HTMLElement>>;
export default FingerGestureElement;
