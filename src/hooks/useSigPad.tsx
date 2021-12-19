import { useEffect, useRef, RefObject } from 'react';
import SignaturePad from 'signature_pad';

export function _dataURLToBlob(dataURL: string): Blob {
  const parts = dataURL.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

function _download(dataURL: string, filename: string): void {
  const blob = _dataURLToBlob(dataURL);
  const url = window.URL.createObjectURL(blob);

  const a: HTMLAnchorElement = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
}

type ReturnType = {
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

export default function App(
  cavansRef: RefObject<HTMLCanvasElement>,
  options = {
    backgroundColor: 'rgb(255, 255, 255,0)',
    penColor: 'black',
    useLandscape: true,
  }
): ReturnType {
  const padRef = useRef<SignaturePad>();

  useEffect(() => {
    const canvas = cavansRef.current;
    const signaturePad = (padRef.current = new SignaturePad(canvas, options));

    function resizeCanvas() {
      const { useLandscape } = options;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      if (useLandscape) {
        const ctx = canvas.getContext('2d');
        ctx.rotate(1.5 * Math.PI);
        ctx.translate(-canvas.height, 0);
      }

      signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }

    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas, false);
    };
  }, [cavansRef, options]);

  const download = (fileName) => {
    const dataURL = padRef.current.toDataURL();
    _download(dataURL, fileName);
  };

  const undo = () => {
    if (options.useLandscape) {
      return;
    }
    const data = padRef.current.toData();

    if (data) {
      data.pop(); // remove the last dot or line
      padRef.current.fromData(data);
    }
  };

  const setPenColor = (color: string) => {
    padRef.current.penColor = color;
  };

  const clear = () => {
    padRef.current.clear();

    if (options.useLandscape) {
      const canvas = cavansRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.height, canvas.width);
    }
  };

  return { download, padRef, undo, setPenColor, clear };
}
