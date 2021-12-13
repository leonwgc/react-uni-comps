import React, { useRef, useLayoutEffect, useImperativeHandle, RefAttributes } from 'react';
import styled from 'styled-components';
import useSigPad from './hooks/useSigPad';
import clsx from 'clsx';
import * as vars from './vars';

type SigPadRefProps = {
  getData: () => string;
  clear: () => void;
  download: (fileName: string) => void;
};

type Props = {
  /** 画布背景色 */
  padColor: '';
  /** 画笔颜色 */
  penColor: '';
  className?: string;
  style?: React.CSSProperties;
} & RefAttributes<SigPadRefProps>;

const StyledSignature = styled.div`
  position: relative;
  border: 1px solid ${vars.border};
  box-sizing: border-box;
`;

/** 签名 */
const Signature = React.forwardRef<SigPadRefProps, Props>((props, ref) => {
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
