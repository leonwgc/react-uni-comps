import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Popover from './Popover';
import type { Placement } from './Popover';
import clsx from 'clsx';

const StylePopover = styled(Popover)`
  color: #fff;
  padding: 12px;
`;

type Offset = { x?: number; y?: number };

export type Props = {
  className?: string;
  /** tooltip显示的内容 */
  title?: React.ReactNode;
  /** 显示箭头,默认显示 */
  arrow?: boolean;
  /** 显示位置,参考popover */
  placement?: Placement;
  /** 需要tooltip的子元素 */
  children: React.ReactElement;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /** hover触发显示，关闭的timeout时间，默认100 (ms) */
  hoverDelay?: number;
  /** visible状态变化回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** 展开动画, 默认true */
  animate?: boolean;
  style?: React.CSSProperties;
};

/** 文字提示气泡框, 基于Popover */
const Tooltip = (props: Props): React.ReactElement => {
  const {
    title,
    hoverDelay = 100,
    placement = 'top',
    arrow = true,
    offset,
    className,
    style,
    children,
    ...popoverRest
  } = props;
  // 鼠标移到popover内容区，不关闭popover
  const ref = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  const actionProps = {
    onMouseEnter: () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      setVisible(true);
    },
    onMouseLeave: () => {
      ref.current = window.setTimeout(() => {
        setVisible(false);
      }, hoverDelay);
    },
    onFocus: () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
      setVisible(true);
    },
  };

  // add active class to trigger el
  const otherProps = {
    className: clsx(React.isValidElement(children) ? (children.props as Props)?.className : '', {
      active: visible,
    }),
  };

  return (
    <StylePopover
      {...popoverRest}
      className={clsx('uc-tooltip', className)}
      style={{ backgroundColor: 'rgb(0, 0, 0, 0.85)', ...style }}
      visible={visible}
      placement={placement}
      content={title}
      arrow={arrow}
      offset={offset}
      {...actionProps}
    >
      {React.isValidElement(children) ? (
        React.cloneElement(children, {
          ...actionProps,
          ...otherProps,
        })
      ) : (
        <span {...actionProps} {...otherProps}>
          {children}
        </span>
      )}
    </StylePopover>
  );
};
Tooltip.displayName = 'UC-Tooltip';

export default Tooltip;
