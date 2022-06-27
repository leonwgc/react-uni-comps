import React, { useRef, useLayoutEffect, useImperativeHandle, RefAttributes } from 'react';
import styled from 'styled-components';
import useSigPad from './hooks/useSigPad';
import clsx from 'clsx';
import * as vars from './vars';

export type SigPadRef = {
  /** 获取图片dataURL字符串 */
  getData: () => string;
  /** 清空画布 */
  clear: () => void;
  /** 下载签名 */
  download: (fileName: string) => void;
};

type Props = React.HTMLAttributes<Element> & {
  /**
   * 画布背景色
   * @default #fff
   *  */
  padColor?: string;
  /**
   * 画笔颜色
   * @default #000
   *  */
  penColor?: string;
} & RefAttributes<SigPadRef>;

const StyledSignature = styled.div`
  position: relative;
  border: 1px solid ${vars.border};
  box-sizing: border-box;
`;

/** 签名 */
const Signature = React.forwardRef<SigPadRef, Props>((props, ref) => {
  const { padColor, penColor, className, ...rest } = props;
  const elRef = useRef<HTMLDivElement>();
  const canvasRef = useRef<HTMLCanvasElement>();
  const { padRef, clear, download } = useSigPad(canvasRef, {
    useLandscape: false,
    penColor,
    backgroundColor: padColor,
  });

  useImperativeHandle(ref, () => ({
    getData: () => {
      return padRef.current.toDataURL() as string;
    },
    clear: () => {
      clear();
    },
    download,
  }));

  useLayoutEffect(() => {
    // read size from container
    canvasRef.current.width = elRef.current.offsetWidth;
    canvasRef.current.height = elRef.current.offsetHeight;
  }, []);
  return (
    <StyledSignature {...rest} className={clsx('uc-signature', className)} ref={elRef}>
      <canvas ref={canvasRef}></canvas>
    </StyledSignature>
  );
});

Signature.displayName = 'UC-Signature';

export default Signature;
