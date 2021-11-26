import React, { HTMLAttributes, ReactElement, useEffect } from 'react';
import TransitionElement from './TransitionElement';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledMask = styled.div`
  background-color: rgba(0, 0, 0);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: opacity 0.22s linear;
  touch-action: none;

  &.from {
    opacity: 0.4;
  }
  &.to {
    opacity: 0.45;
  }
`;

type Props = {
  /** 显示遮罩时，设置body.style.overflow为hidden,默认true */
  hideOverflow?: boolean;
  style?: React.CSSProperties;
  className?: string;
  /** 上层元素 */
  children?: ReactElement;
} & HTMLAttributes<HTMLDivElement>;

/** 遮罩层 */
const Mask = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { children, className, hideOverflow = true, ...rest } = props;

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (hideOverflow) {
      document.body.style.overflow = hideOverflow ? 'hidden' : '';
    }
  }, [hideOverflow]);

  return (
    <TransitionElement ref={ref}>
      <StyledMask {...rest} className={clsx('uc-mask', className)}>
        {children}
      </StyledMask>
    </TransitionElement>
  );
});

Mask.displayName = 'UC-Mask';

export default Mask;
