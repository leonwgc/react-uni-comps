import React, { HTMLAttributes, ReactElement, useEffect, useRef } from 'react';
import TransitionElement from './TransitionElement';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0);
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: opacity 0.1s linear;

  &.from {
    opacity: 0.4;
  }
  &.to {
    opacity: 0.55;
  }
`;

export type Props = {
  /** 是否显示 */
  visible: boolean;
  /** 上层元素 */
  children?: ReactElement;
} & HTMLAttributes<HTMLDivElement>;

/** 遮罩层 */
const Backdrop = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { children, visible, ...rest } = props;

  const lastBodyFlow = useRef<string>('');

  useEffect(() => {
    lastBodyFlow.current = document.body.style.overflow;

    return () => {
      document.body.style.overflow = lastBodyFlow.current;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : lastBodyFlow.current;
  }, [visible]);

  return (
    <TransitionElement>
      <StyledBackdrop className="uc-backdrop" ref={ref} {...rest}>
        {children}
      </StyledBackdrop>
    </TransitionElement>
  );
});

Backdrop.displayName = 'UC-Backdrop';

export default Backdrop;
