import React, { MutableRefObject } from 'react';
import { Position } from './hooks/useDrag';
declare type Props = {
    onDragStart?: (e: MouseEvent | TouchEvent, position: Position) => void;
    onDragEnd?: (e: MouseEvent | TouchEvent, position: Position) => void;
    boundRef?: MutableRefObject<HTMLElement>;
    children: React.ReactElement;
};
/** 拖拽包裹的元素 */
declare const Drag: React.ForwardRefExoticComponent<Props & React.RefAttributes<Element>>;
export default Drag;
