import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import { Placement } from './types';
import { getArrowStyle, getModalStyle, getScrollContainer } from './utils';
import styled from 'styled-components';
import clsx from 'clsx';
import Mask from '../Mask';
import { MARGIN, Offset } from './utils/getModalStyle';
import useCallbackRef from '../hooks/useCallbackRef';
import useUpdateEffect from '../hooks/useUpdateEffect';
import { boxShadow, animationNormal } from '../vars';
import { useSpring, animated, easings } from '@react-spring/web';

// port from https://github.com/bytedance/guide and refactor

const StyledPopover = styled(animated.div)`
  position: absolute;
  z-index: 1000;
  background: #fff;
  border-radius: 2px;

  box-shadow: ${boxShadow};
  .uc-popover-content {
  }

  .uc-popover-close {
    position: absolute;
    z-index: 10;
    top: 12px;
    right: 12px;
    cursor: pointer;
    color: #000;
    opacity: 0.35;
    font-size: 16px;

    :hover {
      opacity: 0.75;
    }
  }

  .uc-popover-arrow {
    position: absolute;
    width: 6px;
    height: 6px;
    z-index: -1;
    background: inherit;
    transform: rotate(45deg);
  }
`;

export type Props = {
  /** 弹框位置,默认bottom */
  placement?: Placement;
  /** 触发元素 */
  children: React.ReactElement;
  /** 弹框内容 */
  content?: React.ReactNode;
  /** 弹框内容是否显示 */
  visible?: boolean;
  /** visible状态变化回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** arrow是否显示 */
  arrow?: boolean;
  /** 关闭按钮是否显示 */
  closable?: boolean;
  /** container style */
  style?: React.CSSProperties;
  /**  关闭回调 */
  onClose?: () => void;
  className?: string;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties;
  /** 遮罩class*/
  maskClass?: string;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /** 弹框mount位置，默认为document.body */
  mountContainer?: () => HTMLElement;
  /** 点击外部区域是否关闭,默认true*/
  closeOnClickOutside?: boolean;
  /** 点击遮罩是否关闭,默认true*/
  closeOnMaskClick?: boolean;
} & React.HTMLAttributes<HTMLElement>;

/**
 * 点击/鼠标移入元素，弹出气泡式的卡片浮层
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
const Popover = (props: Props): React.ReactElement => {
  const {
    placement = 'bottom',
    content,
    arrow = true,
    visible,
    closable,
    onVisibleChange,
    onClose,
    className,
    style,
    children,
    mask,
    maskStyle,
    maskClass,
    mountContainer,
    closeOnClickOutside = true,
    closeOnMaskClick = true,
    offset = {},
    ...rest
  } = props;

  const anchorRef = useRef<HTMLElement>();
  const popoverRef = useRef<HTMLDivElement>(null);
  const resizeTimerRef = useRef<number>(0);
  const offsetRef = useRef<Offset>(offset);
  const onCloseRef = useCallbackRef(onClose);

  const [modalStyle, setModalStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});

  // animation effect
  const [active, setActive] = useState(visible);

  const mountNode = mountContainer?.() || document.body;

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useUpdateEffect(() => {
    onVisibleChange?.(visible);
  }, [visible]);

  useEffect(() => {
    const anchorEl = anchorRef.current;
    const scrollContainer = getScrollContainer(anchorEl);
    // todo: support cust scroll container , by now it's window

    const calculateStyle = (anchorEl, scrollContainer) => {
      const modalEl = popoverRef.current;

      const modalStyle = getModalStyle(
        modalEl,
        anchorEl,
        document.body,
        scrollContainer,
        placement,
        offsetRef.current
      );
      const arrowStyle = getArrowStyle(modalEl, placement, mask, MARGIN);

      setModalStyle(modalStyle);
      setArrowStyle(arrowStyle);
    };

    const handleResize = () => {
      if (resizeTimerRef.current) {
        window.cancelAnimationFrame(resizeTimerRef.current);
      }
      resizeTimerRef.current = window.requestAnimationFrame(() => {
        calculateStyle(anchorEl, scrollContainer);
      });
    };

    if (visible) {
      calculateStyle(anchorEl, scrollContainer);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [visible, placement, mask]);

  const closeOutsideHandler = useCallback(
    (e) => {
      const el = popoverRef.current;
      const anchor = anchorRef.current;

      if (el && !el.contains(e.target) && !anchor.contains(e.target)) {
        onCloseRef.current?.();
      }
    },
    [onCloseRef]
  );

  useEffect(() => {
    if (closeOnClickOutside) {
      window.addEventListener('click', closeOutsideHandler, false);

      return () => {
        window.removeEventListener('click', closeOutsideHandler, false);
      };
    }
  }, [closeOnClickOutside, closeOutsideHandler]);

  const { translate, opacity } = useSpring({
    translate: visible ? 0 : 10,
    opacity: visible ? 1 : 0,
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      setActive(visible);
    },
    config: {
      duration: animationNormal,
      easing: easings.easeInOutQuart,
    },
  });

  return (
    <>
      {React.cloneElement(children, { ref: anchorRef })}
      {ReactDOM.createPortal(
        (visible || active) && (
          <div className={clsx('uc-popover-wrap')}>
            {mask && (
              <Mask
                className={maskClass}
                style={maskStyle}
                onClick={() => {
                  closeOnMaskClick && onClose?.();
                }}
              />
            )}

            <StyledPopover
              {...rest}
              ref={popoverRef}
              className={clsx(className, 'uc-popover', { mask: mask })}
              style={{
                ...modalStyle,
                ...style,
                opacity,
                transform: translate.to((v) => {
                  const p = placement.split('-')[0];

                  if (p === 'bottom') {
                    return `translate(0, -${v}%)`;
                  }
                  if (p === 'top') {
                    return `translate(0, ${v}%)`;
                  }
                  if (p === 'left') {
                    return `translate(${v}%, 0)`;
                  }
                  if (p === 'right') {
                    return `translate(-${v}%, 0)`;
                  }
                  return 'none';
                }),
              }}
            >
              {/* arrow */}
              {arrow && <span className={clsx('uc-popover-arrow')} style={arrowStyle} />}

              {/* close */}
              {closable && (
                <Icon
                  type="uc-icon-guanbi"
                  className={clsx('uc-popover-close')}
                  onClick={onClose}
                />
              )}

              {/** content */}

              <div className={clsx('uc-popover-content')}>{content}</div>
            </StyledPopover>
          </div>
        ),
        mountNode
      )}
    </>
  );
};

export default Popover;
