import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useLayoutEffect,
} from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import Mask from './Mask';
import styled from 'styled-components';
import { isMobile, isBrowser } from './dom';
import clsx from 'clsx';
import { animationNormal } from './vars';
import useMount from './hooks/useMount';
import useForceUpdate from './hooks/useForceUpdate';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 200;
  transition-property: all;
  transition-timing-function: ease-in-out;
  background-color: #fff;
  // bottom
  &.bottom {
    left: 0;
    bottom: 0;
  }

  &.entering,
  &.entered {
    transition-timing-function: ease-out;
    transform: none;
    visibility: visible;
  }

  &.exiting {
    transition-timing-function: ease-in;
  }

  &.exited {
    visibility: hidden;
  }

  &.bottom-exited,
  &.bottom-exiting {
    transform: translate(0, 100%);
  }

  // left
  &.left {
    left: 0;
    top: 0;
    bottom: 0;
  }

  &.left-exited,
  &.left-exiting {
    transform: translate(-100%, 0);
  }

  // right
  &.right {
    right: 0;
    top: 0;
    bottom: 0;
  }

  &.right-exited,
  &.right-exiting {
    transform: translate(100%, 0);
  }

  // top
  &.top {
    left: 0;
    top: 0;
    right: 0;
  }

  &.top-exited,
  &.top-exiting {
    transform: translate(0, -100%);
  }

  //center
  &.center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &.pc {
      top: 200px;
      transform: translate(-50%, 0);
    }
  }

  &.center-entering,
  &.center-entered {
    transform: translate(-50%, -50%) scale(1);
    &.pc {
      top: 160px;
      transform: translate(-50%, 0) scale(1);
    }
    opacity: 1;
  }

  &.center-exited,
  &.center-exiting {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.4);
    &.pc {
      top: 160px;
      transform: translate(-50%, 0) scale(0.4);
    }
  }
`;

export type Props = {
  /** 是否可见 */
  visible?: boolean;
  /**  关闭回调 */
  onClose?: () => void;
  /**
   * 是否显示遮罩
   * @default true
   */
  mask?: boolean;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 遮罩class*/
  maskClass?: string;
  /** 弹框弹出位置，从上，下，左，右，中间 弹出 */
  position?: 'top' | 'bottom' | 'left' | 'center' | 'right';
  /**
   * 动画时间
   * @default 220
   */
  duration?: number;
  /**
   * 弹框挂载节点
   * @default document.body
   */
  mountContainer?: () => HTMLElement | HTMLElement;
  /** 弹框里面的内容 */
  children?: React.ReactNode;
  /** 弹框样式 */
  style?: React.CSSProperties;
  /** 弹框类 */
  className?: string;
  /**
   * 点击遮罩是否关闭
   * @default true
   * */
  closeOnMaskClick?: boolean;
  /**
   * pc端从点击元素飞出动画效果
   * @default true
   */
  flip?: boolean;
  /**
   * 关闭后卸载组件
   * @default true
   */
  unmountOnExit?: boolean;
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
 * 弹层，从上，下，左，右，中间弹出
 *
 *  无须直接使用->
 *  对话框请使用 Modal
 *  上下左右滑出请使用 Drawer
 *
 */
const Popup = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    visible,
    onClose,
    closeOnMaskClick = true,
    mask = true,
    maskStyle,
    maskClass,
    position = 'bottom',
    duration = animationNormal,
    flip = true,
    mountContainer = document.body,
    unmountOnExit = true,
    style,
    className,
  } = props;
  const wrapRef = useRef<HTMLDivElement>();
  const maskRef = useRef<HTMLDivElement>();

  useImperativeHandle(ref, () => wrapRef.current);

  const forceUpdate = useForceUpdate();

  let mountNode;
  if (mountContainer instanceof HTMLElement) {
    mountNode = mountContainer;
  } else {
    mountNode = mountContainer?.();
  }
  const showPosition = mountNode === document.body ? 'fixed' : 'absolute';

  useMount(() => {
    // fix container render at the same time / but not ready
    if (!mountNode) {
      forceUpdate();
    }
  });

  const setTransformOrigin = useCallback(
    (mousePosition) => {
      const dialogEl = wrapRef.current;
      if (
        mousePosition &&
        mousePosition.x >= 0 &&
        mousePosition.y >= 0 &&
        dialogEl &&
        dialogEl.getBoundingClientRect
      ) {
        const { left: x, top: y } = dialogEl.getBoundingClientRect();
        const origin = `${mousePosition.x - x}px ${mousePosition.y - y}px 0`;
        dialogEl.style.transformOrigin = origin;
        dialogEl.style.transitionDuration = '0s';

        // flip: hey yoo reflow
        document.body.offsetHeight;
        dialogEl.style.transitionDuration = duration + 'ms';
      } else {
        setTimeout(() => {
          if (dialogEl) {
            dialogEl.style.transformOrigin = 'unset';
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
      const wrapZIndex = window.getComputedStyle(wrapRef.current, null).getPropertyValue('z-index');
      if (wrapZIndex) {
        maskRef.current.style.zIndex = wrapZIndex;
      }
    }
  }, [mask, visible]);

  return mountNode
    ? ReactDOM.createPortal(
        <div>
          <Mask
            visible={visible && mask}
            ref={maskRef}
            className={maskClass}
            style={{ position: showPosition, ...maskStyle }}
            onClick={() => closeOnMaskClick && onClose?.()}
          />
          <Transition in={visible} timeout={duration} unmountOnExit={unmountOnExit}>
            {(status) => (
              <StyledWrapper
                ref={wrapRef}
                style={{ ...style, position: showPosition, transitionDuration: duration + 'ms' }}
                className={clsx('uc-popup', className, position, status, position + '-' + status, {
                  mobile: isMobile,
                  pc: !isMobile,
                })}
              >
                {children}
              </StyledWrapper>
            )}
          </Transition>
        </div>,
        mountNode
      )
    : null;
});

Popup.displayName = 'UC-Popup';

export default Popup;
