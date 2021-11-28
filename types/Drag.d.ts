import React, { MutableRefObject } from 'react';
import { Position } from './hooks/useDrag';
declare type Props = {
    /** drag开始回调 */
    onDragStart?: (e: MouseEvent | TouchEvent, position: Position) => void;
    /** drag结束回调 */
    onDragEnd?: (e: MouseEvent | TouchEvent, position: Position) => void;
    /** 拖拽限制范围 */
    boundRef?: MutableRefObject<HTMLElement>;
    /** 被拖拽元素 */
    children: React.ReactElement;
};
/** 拖拽 */
declare const Drag: React.ForwardRefExoticComponent<Props & React.RefAttributes<Element>>;
export default Drag;
