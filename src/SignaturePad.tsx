import React, { useRef, useLayoutEffect, useImperativeHandle } from 'react';
import styled from 'styled-components';
import useSigPad from 'react-use-lib/es/useSigPad';
import clsx from 'clsx';
import * as colors from './colors';

type Props = {
  /** 横屏书写模式 */
  landscape?: boolean;
  padColor: '';
  penColor: '';
  className?: string;
  style: React.CSSProperties;
};

type RefObject = {
  getDataUrl: () => string;
  clear: () => void;
};

const StyledSignaturePad = styled.div`
  position: relative;
  border: 1px solid ${colors.border};
  box-sizing: border-box;
  &.landscape {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

/** 签名面板 */
const SignaturePad = React.forwardRef<RefObject, Props>((props, ref) => {
  const { padColor, penColor, landscape = false, className, ...rest } = props;
  const elRef = useRef<HTMLDivElement>();
  const canvasRef = useRef<HTMLCanvasElement>();
  const { padRef, clear } = useSigPad(canvasRef, {
    useLandscape: !!landscape,
    penColor,
    backgroundColor: padColor,
  });

  useImperativeHandle(ref, () => ({
    getDataUrl: () => {
      return padRef.current.toDataURL() as string;
    },
    clear: () => {
      clear();
    },
  }));

  useLayoutEffect(() => {
    // read size from container
    canvasRef.current.width = elRef.current.offsetWidth;
    canvasRef.current.height = elRef.current.offsetHeight;
  }, []);
  return (
    <StyledSignaturePad
      {...rest}
      className={clsx('uc-sigpad', className, { landscape: landscape, portrait: !landscape })}
      ref={elRef}
    >
      <canvas ref={canvasRef}></canvas>
    </StyledSignaturePad>
  );
});

SignaturePad.displayName = 'UC-SignaturePad';

export default SignaturePad;
