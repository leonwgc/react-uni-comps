import { RefObject } from 'react';
import SignaturePad from 'signature_pad';
export declare function _dataURLToBlob(dataURL: string): Blob;
declare type ReturnType = {
    download: (fileName: string) => void;
    padRef: RefObject<SignaturePad>;
    undo: () => void;
    setPenColor: (color: string) => void;
    clear: () => void;
};
export default function App(cavansRef: RefObject<HTMLCanvasElement>, options?: {
    backgroundColor: string;
    penColor: string;
    useLandscape: boolean;
}): ReturnType;
export {};
