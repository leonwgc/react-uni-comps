import { SyntheticEvent } from 'react';
export declare const supportedGestures: string[];
export declare type Option = Partial<{
    onTouchStart: (evt: SyntheticEvent) => void;
    onTouchMove: (evt: SyntheticEvent) => void;
    onTouchEnd: (evt: SyntheticEvent) => void;
    onTouchCancel: (evt: SyntheticEvent) => void;
    onMultipointStart: (evt: SyntheticEvent) => void;
    onMultipointEnd: (evt: SyntheticEvent) => void;
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
