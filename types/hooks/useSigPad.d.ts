import { RefObject } from 'react';
import SignaturePad from '../sigpad';
export declare function _dataURLToBlob(dataURL: string): Blob;
declare type ReturnType = {
    /** 下载签名图片 */
    download: (fileName: string) => void;
    /** SignaturePad实例引用 */
    padRef: RefObject<SignaturePad>;
    /** 撤销 */
    undo: () => void;
    /** 设置画笔颜色 */
    setPenColor: (color: string) => void;
    /** 清空画布 */
    clear: () => void;
};
export default function App(cavansRef: RefObject<HTMLCanvasElement>, options?: {
    backgroundColor: string;
    penColor: string;
    useLandscape: boolean;
}): ReturnType;
export {};
