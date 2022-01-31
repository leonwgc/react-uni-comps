import React, { HTMLAttributes, ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { useSpring, animated } from '@react-spring/web';
import useUnmount from './hooks/useUnmount';
import * as vars from './vars';

const StyledMask = styled(animated.div)`
  background-color: rgba(0, 0, 0);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  touch-action: none;
`;

type Props = {
  /** 显示遮罩时，设置body.style.overflow为hidden,默认true */
  hideOverflow?: boolean;
  style?: React.CSSProperties;
  visible?: boolean;
  /** 动画时间,默认220 */
  duration?: number;
  className?: string;
  children?: ReactElement;
} & HTMLAttributes<HTMLDivElement>;

/** 遮罩层 */
const Mask = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const {
    children,
    className,
    visible,
    duration = vars.animationNormal,
    style,
    hideOverflow = true,
    ...rest
  } = props;

  // animation effect
  const [active, setActive] = useState(visible);

  const styles = useSpring({
    opacity: visible ? 0.45 : 0,
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      setActive(visible);
    },
    config: {
      duration,
    },
  });

  useEffect(() => {
    document.body.style.overflow = visible && hideOverflow ? 'hidden' : '';
  }, [visible, hideOverflow]);

  useUnmount(() => {
    document.body.style.overflow = '';
  });

  return active || visible ? (
    <StyledMask
      ref={ref}
      {...rest}
      className={clsx('uc-mask', className)}
      style={{ ...styles, ...style }}
    >
      {children}
    </StyledMask>
  ) : null;
});

Mask.displayName = 'UC-Mask';

export default Mask;
