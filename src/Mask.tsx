import React, { HTMLAttributes, ReactElement, useEffect, useRef } from 'react';
import TransitionElement from './TransitionElement';
import styled from 'styled-components';

const StyledMask = styled.div`
  background-color: rgba(0, 0, 0);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: opacity 0.24s linear;

  &.from {
    opacity: 0.4;
  }
  &.to {
    opacity: 0.55;
  }
`;

type Props = {
  /** 显示遮罩时，设置body.style.overflow为hidden,默认true */
  hideOverflow?: boolean;
  /** 上层元素 */
  children?: ReactElement;
} & HTMLAttributes<HTMLDivElement>;

/** 遮罩层 */
const Mask = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { children, hideOverflow = true, ...rest } = props;

  const lastBodyFlow = useRef<string>('');

  useEffect(() => {
    lastBodyFlow.current = document.body.style.overflow;

    return () => {
      document.body.style.overflow = lastBodyFlow.current;
    };
  }, []);

  useEffect(() => {
    if (hideOverflow) {
      document.body.style.overflow = hideOverflow ? 'hidden' : lastBodyFlow.current;
    }
  }, [hideOverflow]);

  return (
    <TransitionElement>
      <StyledMask className="uc-mask" ref={ref} {...rest}>
        {children}
      </StyledMask>
    </TransitionElement>
  );
});

Mask.displayName = 'UC-Mask';

export default Mask;
