import { SyntheticEvent } from 'react';
export declare type Option = Partial<{
    onTouchStart: () => void;
    onTouchMove: () => void;
    onTouchEnd: () => void;
    onTouchCancel: () => void;
    onMultipointStart: () => void;
    onMultipointEnd: () => void;
    onTap: () => void;
    onDoubleTap: () => void;
    onLongTap: () => void;
    onSingleTap: () => void;
    onRotate: (evt: SyntheticEvent & {
        angle: number;
    }) => void;
    onPinch: (evt: SyntheticEvent & {
        scale: number;
    }) => void;
    onPressMove: (evt: SyntheticEvent & {
        deltaX: number;
        deltaY: number;
    }) => void;
    onSwipe: (evt: SyntheticEvent & {
        direction: 'left' | 'right' | 'up' | 'down';
    }) => void;
    onTwoFingerPressMove: () => void;
}>;
/** 手势操作 */
declare const FingerGesture: (el: Element, option: Option) => void;
export default FingerGesture;
