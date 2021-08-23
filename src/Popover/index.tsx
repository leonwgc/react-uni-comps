import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import SvgClose from './Close';
import { Placement } from './types';
import * as theme from '../colors';
import { getArrowStyle, getModalStyle, getScrollContainer, getNodeName } from './utils';
import styled from 'styled-components';
import clsx from 'clsx';

// port from https://github.com/bytedance/guide and refactor

const StyledPopover = styled.div`
  position: absolute;
  z-index: 1100;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 0px 4px 0px ${theme.border}, 0px 2px 6px 0px ${theme.border};

  .uc-popover-content {
  }

  .uc-popover-close-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  .uc-popover-arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    background: inherit;
    transform: rotate(45deg);
  }
`;

export interface Props {
  /** 弹框位置,包含-的-后面指示arrow位置 */
  placement?: Placement;
  /** 触发元素 */
  children: React.ReactElement;
  /** 弹框内容 */
  content?: React.ReactNode;
  /** 弹框是否显示 */
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
}

const MARGIN = 12;

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
  } = props;

  const childrenRef = useRef();

  const popoverRef = useRef<HTMLDivElement>(null);
  const resizeTimerRef = useRef<number>(0);

  const [modalStyle, setModalStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});

  useEffect(() => {
    const anchorEl = childrenRef.current;
    const scrollContainer = getScrollContainer(anchorEl);

    const calculateStyle = (anchorEl, scrollContainer): void => {
      const modalEl = popoverRef.current;

      if (!modalEl || !anchorEl) return;

      const modalStyle = getModalStyle(
        modalEl,
        anchorEl,
        document.body,
        scrollContainer,
        placement,
        { x: 0, y: 0 } // offset
      );
      const arrowStyle = getArrowStyle(modalEl, placement, false);

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
    const handleScroll = (): void => {
      const modalEl = popoverRef.current;
      const anchorPos = anchorEl.getBoundingClientRect();
      const modalPos = (modalEl as Element).getBoundingClientRect();
      const scrollPos = scrollContainer.getBoundingClientRect();

      const isScrollContainerHtml = getNodeName(scrollContainer) === 'html';

      /* scroll the scroll container to show the modal */
      const visibleHeight = (scrollContainer as HTMLElement).clientHeight;
      const scrollContainerTop = isScrollContainerHtml ? 0 : scrollPos.top;
      if (
        // Modal is below the viewport
        anchorPos.top - scrollContainerTop + anchorPos.height + modalPos.height + MARGIN >=
          visibleHeight ||
        // Modal is above the viewport
        anchorPos.top <= modalPos.height + MARGIN
      ) {
        // scrolls to a particular set of coordinates inside a given element.
        scrollContainer.scrollTo({
          left: 0,
          top:
            scrollContainer.scrollTop +
            anchorPos.top -
            scrollContainerTop +
            anchorPos.height / 2 -
            visibleHeight / 2 +
            MARGIN,
          behavior: 'smooth',
        });
      }

      if (getNodeName(scrollContainer) === 'html') return;

      const documentEl = document.documentElement;
      /* scroll to show the scroll container */
      if (
        // Modal is below the viewport
        scrollPos.top + scrollPos.height >= window.innerHeight ||
        // Modal is above the viewport
        scrollPos.bottom > scrollPos.height
      ) {
        // scrolls to a particular set of coordinates inside a given element.
        documentEl.scrollTo({
          left: 0,
          top:
            documentEl.scrollTop +
            scrollPos.top +
            scrollPos.height / 2 -
            window.innerHeight / 2 +
            MARGIN,
          behavior: 'smooth',
        });
      }
    };

    if (visible) {
      handleScroll();
      calculateStyle(anchorEl, scrollContainer);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [visible, placement]);

  return visible ? (
    <>
      {React.cloneElement(children, { ref: childrenRef })}
      {ReactDOM.createPortal(
        <StyledPopover
          ref={popoverRef}
          className={clsx(className, 'uc-popover')}
          style={{ ...modalStyle, ...style }}
        >
          {/* arrow */}
          {arrow && <span className={clsx('uc-popover-arrow')} style={arrowStyle} />}

          {/* close */}
          {closable && <SvgClose className={clsx('uc-popover-close-icon')} onClick={onClose} />}

          {/** content */}
          <div className={clsx('uc-popover-content')}>{content}</div>
        </StyledPopover>,
        document.body
      )}
    </>
  ) : (
    React.cloneElement(children, { ref: childrenRef })
  );
};

export default Popover;
