import React, { useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { useSpring, animated, easings } from '@react-spring/web';
import type { BaseProps } from './types';

type Props = {
  /**
   * 波纹效果背景色
   * @default #ccc
   * */
  color?: string;
  children?: React.ReactNode;
  /**
   * 波纹起始缩放大小
   * @default 0.3
   *  */
  startScale?: number;
  /**
   * 动画持续时间
   * @default 300
   *  */
  duration?: number;
  /** 100% 宽度 */
  block?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
} & BaseProps;

const StyledWrap = styled.div`
  overflow: hidden;
  position: relative;
  display: inline-block;
  cursor: pointer;
  &.block {
    display: block;
  }
  .ripple-el {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

/** 波纹效果,给子元素添加点击波纹效果 */
const Ripple = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    color = '#ccc',
    duration = 300,
    startScale = 0.3,
    children,
    block,
    ...rest
  } = props;

  const elRef = useRef(null);
  const isRunningRef = useRef(false);

  useImperativeHandle(ref, () => elRef.current);

  const [styles, api] = useSpring(() => ({
    from: { scale: 1, opacity: 0, width: '', height: '', top: '', left: '' },
    config: {
      duration,
      easing: easings.easeInOutQuart,
    },
    onStart: () => {
      isRunningRef.current = true;
    },
    onRest: () => {
      isRunningRef.current = false;
      api.start({
        width: '',
        height: '',
        top: '',
        left: '',
        immediate: true,
      });
    },
  }));

  const start = React.useCallback(
    (event) => {
      if (isRunningRef.current) {
        return;
      }
      const element = elRef.current;
      const rect = element.getBoundingClientRect();

      const { clientX, clientY } = event.touches ? event.touches[0] : event;
      const rippleX = Math.round(clientX - rect.left);
      const rippleY = Math.round(clientY - rect.top);

      const sizeX =
        Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY =
        Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      const rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);

      api.start({
        width: rippleSize + 'px',
        height: rippleSize + 'px',
        top: -(rippleSize / 2) + rippleY + 'px',
        left: -(rippleSize / 2) + rippleX + 'px',
        immediate: true,
        scale: startScale,
      });

      api.start({
        scale: 1,
      });
    },
    [api, startScale]
  );

  return (
    <StyledWrap
      {...rest}
      onClick={(e) => {
        start(e);
        props.onClick?.(e);

        if (React.isValidElement(children)) {
          children.props.onClick?.(e);
        }
      }}
      ref={elRef}
      className={clsx('uc-ripple', className, {
        block: block,
      })}
    >
      {children}
      <animated.div
        className="ripple-el"
        style={{
          ...styles,
          opacity: styles.scale.to([0, 0.4, 0.9, 1], [0.1, 0.2, 0.3, 0]),
          backgroundColor: color,
        }}
      ></animated.div>
    </StyledWrap>
  );
});

Ripple.displayName = 'UC-Ripple';

export default Ripple;
