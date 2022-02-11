import React from 'react';
import { Options } from './FingerGesture';
declare type Props = {
    /** 手势操作元素,如果是组件，需要forwardRef到dom */
    children: React.ReactElement;
} & Partial<Options>;
/** 给子元素添加手势操作 */
declare const FingerGestureElement: React.FC<Props>;
export default FingerGestureElement;
