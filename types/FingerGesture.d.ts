import { SyntheticEvent } from 'react';
export declare type Options = Partial<{
    onTouchStart: (evt: SyntheticEvent) => void;
    onTouchMove: (evt: SyntheticEvent) => void;
    onTouchEnd: (evt: SyntheticEvent) => void;
    onTouchCancel: (evt: SyntheticEvent) => void;
    onMultipointStart: (evt: SyntheticEvent) => void;
    onMultipointEnd: (evt: SyntheticEvent) => void;
    /** 点两次 */
    onDoubleTap: () => void;
    /** 长按 */
    onLongTap: () => void;
    /** 按一次 */
    onSingleTap: () => void;
    /** 旋转, 单位:deg */
    onRotate: (evt: SyntheticEvent & {
        angle: number;
    }) => void;
    /** 缩放  */
    onPinch: (evt: SyntheticEvent & {
        scale: number;
    }) => void;
    /** 单指滑动 */
    onPressMove: (evt: SyntheticEvent & {
        deltaX: number;
        deltaY: number;
    }) => void;
    /** 左右滑动 */
    onSwipe: (evt: SyntheticEvent & {
        direction: 'left' | 'right' | 'up' | 'down';
    }) => void;
    /** 双指滑动 */
    onTwoFingerPressMove: (evt: SyntheticEvent & {
        deltaX: number;
        deltaY: number;
    }) => void;
}>;
/** 手势操作 */
declare const FingerGesture: (el: Element, option: Options) => void;
export default FingerGesture;
