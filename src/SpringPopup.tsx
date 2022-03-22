import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import Mask from './Mask';
import styled from 'styled-components';
import { isMobile, isBrowser } from './dom';
import clsx from 'clsx';
import { animationSlow } from './vars';
import { useSpring, animated, easings } from '@react-spring/web';

const StyledWrapper = styled(animated.div)`
  position: fixed;
  z-index: 200;

  // bottom
  &.bottom {
    left: 0;
    bottom: 0;
    right: 0;
  }

  // left
  &.left {
    left: 0;
    top: 0;
    bottom: 0;
  }

  // right
  &.right {
    right: 0;
    top: 0;
    bottom: 0;
  }

  // top
  &.top {
    left: 0;
    top: 0;
    right: 0;
  }

  //center
  &.center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &.pc {
      top: 160px;
      transform: translate(-50%, 0);
    }
  }
`;

export type Props = {
  /** 是否可见 */
  visible?: boolean;
  /**  关闭回调 */
  onClose?: () => void;
  /** 是否显示遮罩，默认显示 */
  mask?: boolean;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 遮罩class*/
  maskClass?: string;
  /** 弹框弹出位置，从上，下，左，右，中间 弹出 */
  position: 'top' | 'bottom' | 'left' | 'center' | 'right';
  /** 弹出动画时间，默认160ms */
  duration?: number;
  /** 弹框mount位置，默认为document.body */
  mountContainer?: () => HTMLElement;
  /** 弹框里面的内容 */
  children?: React.ReactNode;
  /** 弹框style */
  style?: React.CSSProperties;
  /** 弹框className */
  className?: string;
  /** 点击遮罩是否关闭,默认true*/
  closeOnMaskClick?: boolean;
  /** pc端从点击元素飞出动画效果，默认true */
  flip?: boolean;
  /** 展开动画, 默认true */
  animated?: boolean;
};

type MousePosition = {
  x: number;
  y: number;
};

let mousePosition: MousePosition = null;

if (isBrowser) {
  const getClickPosition = (e: MouseEvent) => {
    mousePosition = {
      x: e.clientX,
      y: e.clientY,
    };
    setTimeout(() => {
      mousePosition = null;
    }, 100);
  };

  document.documentElement.addEventListener('click', getClickPosition, true);
}

/**
 *
 * Spring动画弹层，从上，下，左，右，中间弹出
 *
 *  无须直接使用->
 *  对话框请使用 Modal
 *  上下左右滑出请使用 Drawer
 *
 */
const SpringPopup = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    visible,
    onClose,
    closeOnMaskClick = true,
    mask = true,
    maskStyle,
    maskClass,
    position = 'bottom',
    duration = animationSlow,
    flip = true,
    mountContainer,
    animated = true,
    style,
    className,
  } = props;
  const popElRef = useRef<HTMLDivElement>();
  const maskRef = useRef<HTMLDivElement>();

  const isCenter = position === 'center';

  useImperativeHandle(ref, () => popElRef.current);

  // const lastMousePositionRef = useRef<MousePosition>();
  const mountNode = mountContainer?.() || document.body;
  const showPosition = mountNode === document.body ? 'fixed' : 'absolute';

  const [active, setActive] = useState(visible);

  const styles = useSpring({
    opacity: visible ? 1 : 0,
    v: visible ? 0 : 1,
    scale: visible ? 1 : isMobile ? 0.8 : 0.4, // center
    immediate: !animated,
    onStart: () => {
      setActive(true);
      if (popElRef.current) {
        popElRef.current.style.visibility = '';
      }
    },
    onRest: () => {
      setActive(visible);

      if (popElRef.current && !visible) {
        popElRef.current.style.visibility = 'hidden';
      }
    },
    config: {
      duration,
      easing: easings.easeInOutQuart,
    },
  });

  const setTransformOrigin = useCallback(
    (mousePosition) => {
      const popEl = popElRef.current;
      if (
        mousePosition &&
        mousePosition.x >= 0 &&
        mousePosition.y >= 0 &&
        popEl &&
        popEl.getBoundingClientRect
      ) {
        const { left: x, top: y } = popEl.getBoundingClientRect();
        const origin = `${mousePosition.x - x}px ${mousePosition.y - y}px 0`;
        popEl.style.transformOrigin = origin;
      } else {
        setTimeout(() => {
          if (popEl) {
            popEl.style.transformOrigin = 'unset';
          }
        }, duration);
      }
    },
    [duration]
  );
  useLayoutEffect(() => {
    if (!isMobile && position === 'center' && flip) {
      if (visible) {
        setTransformOrigin(mousePosition);
      } else {
        setTransformOrigin(null);
      }
    }
  }, [visible, position, setTransformOrigin, flip]);

  useLayoutEffect(() => {
    if (mask && visible && maskRef.current) {
      const wrapZIndex = window
        .getComputedStyle(popElRef.current, null)
        .getPropertyValue('z-index');
      if (wrapZIndex) {
        maskRef.current.style.zIndex = wrapZIndex;
      }
    }
  }, [mask, visible]);

  const getTransformText = (v) => {
    switch (position) {
      case 'left': {
        return `translate3d(${-100 * v}%, 0,0)`;
      }
      case 'right': {
        return `translate3d(${100 * v}%, 0,0)`;
      }
      case 'top': {
        return `translate3d(0, ${-100 * v}%,0)`;
      }
      case 'bottom': {
        return `translate3d(0, ${100 * v}%,0)`;
      }
      default:
        return '';
    }
  };

  const isAlive = visible || active;

  const _style: any = {
    ...style,
    position: showPosition,
  };

  if (isCenter) {
    _style.opacity = styles.opacity;
    _style.transform = styles.scale.to(
      (s) => `translate(-50%, ${isMobile ? '-50%' : 0}) scale(${s})`
    );
  } else {
    _style.transform = styles.v.to(getTransformText);
  }

  return ReactDOM.createPortal(
    isAlive && (
      <>
        <Mask
          visible={mask && visible}
          ref={maskRef}
          className={maskClass}
          duration={duration}
          style={{ position: showPosition, ...maskStyle }}
          onClick={() => closeOnMaskClick && onClose?.()}
        />
        <StyledWrapper
          ref={popElRef}
          style={_style}
          className={clsx('uc-popup', className, position, {
            mobile: isMobile,
            pc: !isMobile,
          })}
        >
          {children}
        </StyledWrapper>
      </>
    ),
    mountNode
  );
});

SpringPopup.displayName = 'UC-SpringPopup';

export default SpringPopup;
