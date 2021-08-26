import { MutableRefObject } from 'react';
export declare type Position = {
    left: number;
    top: number;
};
declare const useDragMove: (elRef: MutableRefObject<HTMLElement>, boundRef?: MutableRefObject<HTMLElement>, onStart?: (e: MouseEvent | TouchEvent, position: Position) => void, onEnd?: (e: MouseEvent | TouchEvent, position: Position) => void) => void;
export default useDragMove;
