import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import IconCross from '../IconCross';
import { Placement } from './types';
import { getArrowStyle, getModalStyle, getScrollContainer } from './utils';
import styled from 'styled-components';
import clsx from 'clsx';
import Mask from '../Mask';
import { MARGIN, Offset } from './utils/getModalStyle';

// port from https://github.com/bytedance/guide and refactor

const StyledPopover = styled.div`
  position: absolute;
  z-index: 1000;
  background: #fff;
  border-radius: 2px;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .uc-popover-content {
  }

  .uc-popover-close {
    position: absolute;
    z-index: 10;
    top: 8px;
    right: 8px;
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
    maskStyle,
    maskClass,
    mountContainer,
    offset = {},
    ...rest
  } = props;

  const childrenRef = useRef();
  const popoverRef = useRef<HTMLDivElement>(null);
  const resizeTimerRef = useRef<number>(0);
  const offsetRef = useRef<Offset>(offset);

  const [modalStyle, setModalStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});

  const mountNode = mountContainer?.() || document.body;

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  useEffect(() => {
    const anchorEl = childrenRef.current;
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

  return (
    <>
      {React.cloneElement(children, { ref: childrenRef })}
      {visible
        ? ReactDOM.createPortal(
            <div className={clsx('uc-popover-wrap')}>
              {mask && <Mask className={maskClass} style={maskStyle} onClick={onClose} />}

              <StyledPopover
                ref={popoverRef}
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
            </div>,
            mountNode
          )
        : null}
    </>
  );
};

export default Popover;
