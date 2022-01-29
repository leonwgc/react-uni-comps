import React, { useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { useSpring, animated, easings } from '@react-spring/web';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  /** 波纹效果背景色,默认 currentColor */
  color?: string;
  children?: React.ReactNode;
};

const StyledWrap = styled.div`
  overflow: hidden;
  position: relative;
  display: inline-flex;
  cursor: pointer;
  .ripple-el {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    background-color: currentColor;
  }
`;

/** 波纹效果,给子元素添加点击波纹效果 */
const Ripple = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, color = 'currentColor', children, ...rest } = props;

  const elRef = useRef(null);
  const isRunningRef = useRef(false);

  useImperativeHandle(ref, () => elRef.current);

  const [styles, api] = useSpring(() => ({
    from: { scale: 1, opacity: 0, width: '', height: '', top: '', left: '' },
    config: {
      duration: 500,
      easing: easings.easeInOutQuad,
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
        scale: 0,
      });

      api.start({
        scale: 1,
      });
    },
    [api]
  );

  return (
    <StyledWrap
      {...rest}
      ref={elRef}
      className={clsx('uc-ripple', className)}
      onClick={(e) => {
        start(e);
        if (React.isValidElement(children)) {
          children.props.onClick?.(e);
        }
      }}
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
