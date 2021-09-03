import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import IconCross from '../IconCross';
import { Placement } from './types';
import { getArrowStyle, getModalStyle, getScrollContainer } from './utils';
import styled from 'styled-components';
import TransitionElement from '../TransitionElement';
import clsx from 'clsx';
import Mask from '../Mask';
import { MARGIN, Offset } from './utils/getModalStyle';

// port from https://github.com/bytedance/guide and refactor

const StyledPopover = styled.div`
  position: absolute;
  z-index: 1100;
  background: #fff;
  border-radius: 2px;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .uc-popover-content {
  }

  .uc-popover-close {
    position: absolute;
    z-index: 10;
    top: 16px;
    right: 16px;
    cursor: pointer;
    color: #000;
    opacity: 0.35;

    :hover {
      opacity: 0.75;
    }
  }

  .uc-popover-arrow {
    position: absolute;
    width: 6px;
    height: 6px;
    background: inherit;
    transform: rotate(45deg);
  }
`;

export type Props = {
  /** 弹框位置,包含-的-后面指示arrow位置 */
  placement?: Placement;
  /** 触发元素 */
  children: React.ReactElement;
  /** 弹框内容 */
  content?: React.ReactNode;
  /** 弹框内容是否显示 */
  visible?: boolean;
  /** arrow是否显示 */
  arrow?: boolean;
  /** 关闭按钮是否显示 */
  closable?: boolean;
  /** container style */
  style?: React.CSSProperties;
  /**  关闭回调 */
  onClose?: () => void;
  className?: string;
  /** mask是否显示 */
  mask?: boolean;
  /** 弹框自定义偏移 */
  offset?: Offset;
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
    onClose,
    className,
    style,
    children,
    mask,
    offset = {},
    ...rest
  } = props;

  const childrenRef = useRef();
  const popoverRef = useRef<HTMLDivElement>(null);
  const resizeTimerRef = useRef<number>(0);
  const offsetRef = useRef<Offset>(offset);

  const [modalStyle, setModalStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useEffect(() => {
    const anchorEl = childrenRef.current;
    const scrollContainer = getScrollContainer(anchorEl);

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

  return (
    <>
      {React.cloneElement(children, { ref: childrenRef })}
      {visible
        ? ReactDOM.createPortal(
            <>
              {mask ? <Mask onClick={onClose} /> : null}
              <TransitionElement ref={popoverRef}>
                <StyledPopover
                  className={clsx(className, 'uc-popover', { mask: mask })}
                  style={{ ...modalStyle, ...style }}
                  {...rest}
                >
                  {/* arrow */}
                  {arrow && <span className={clsx('uc-popover-arrow')} style={arrowStyle} />}

                  {/* close */}
                  {closable && (
                    <IconCross className={clsx('uc-popover-close')} size={20} onClick={onClose} />
                  )}

                  {/** content */}
                  <div className={clsx('uc-popover-content')}>{content}</div>
                </StyledPopover>
              </TransitionElement>
            </>,
            document.body
          )
        : null}
    </>
  );
};

export default Popover;
