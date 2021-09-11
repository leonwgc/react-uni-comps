import React from 'react';
import { Option } from './hooks/FingerGesture';
/** 手势操作元素 */
declare const FingerGestureElement: React.ForwardRefExoticComponent<{
    children: React.ReactElement;
} & Partial<Option> & React.RefAttributes<HTMLElement>>;
export default FingerGestureElement;
