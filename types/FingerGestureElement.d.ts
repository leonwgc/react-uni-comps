import React from 'react';
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
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
        direction: "left" | "right" | "down" | "up";
    }) => void;
    onTwoFingerPressMove: () => void;
}>> & React.RefAttributes<HTMLElement>>>;
export default _default;
