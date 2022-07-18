import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Popover from './Popover';
import type { Placement } from './Popover';
import clsx from 'clsx';
import type { BaseProps } from './types';

const StylePopover = styled(Popover)`
  color: #fff;
  padding: 6px 8px;
  max-width: 250px;
`;

type Offset = { x?: number; y?: number };

export type Props = {
  /** tooltip显示的内容 */
  title?: React.ReactNode;
  /** 显示箭头,默认显示 */
  arrow?: boolean;
  /** 显示位置 */
  placement?: Placement;
  /** 需要tooltip的子元素 */
  children: React.ReactElement;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /**
   * hover触发显示，关闭的timeout时间
   * @default 100
   *  */
  hoverDelay?: number;
  /** visible状态变化回调 */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * 展开动画
   * @default true
   *  */
  animate?: boolean;
} & BaseProps;

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
    ...rest
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
      {...rest}
      className={clsx('uc-tooltip', className)}
      style={{ background: 'rgba(0, 0, 0, 0.75)', ...style }}
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
