import React, { useState, useRef, useCallback, SyntheticEvent, useImperativeHandle } from 'react';
import Popover from './Popover';
import type { Placement } from './Popover';
import styled from 'styled-components';
import clsx from 'clsx';
import { boxShadow } from './vars';

type Offset = { x?: number; y?: number };

const StyledPopover = styled(Popover)`
  background: #fff;
  border-radius: 2px;
  box-shadow: ${boxShadow};
`;

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 弹出内容 */
  content?: React.ReactNode;
  /**
   * 显示箭头
   * @default false
   *  */
  arrow?: boolean;
  /**
   *  显示位置,默认bottom-right底部,参考popover
   *  @default bottom-right
   *  */
  placement?: Placement;
  /** 触发元素，如果是组件，需要forwardRef到dom */
  children: React.ReactElement;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /**
   * 触发方式
   * @default click
   */
  trigger?: 'click' | 'hover';
  /**
   * 点击内容区域关闭
   * @default true
   */
  closeOnClick?: boolean;
  /**
   * hover触发显示，关闭的timeout时间，默认100 (ms)
   * @default 100
   *  */
  hoverDelay?: number;
  /** visible状态变化回调 */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * 点击外部区域是否关闭
   * @default true
   * */
  closeOnClickOutside?: boolean;
  /**
   * 展开动画
   * @default true
   *  */
  animate?: boolean;
};

export interface PopMenuRefType {
  show: () => void;
  hide: () => void;
}

/**
 * click/hover 弹出菜单, 默认click, 基于Popover
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
const PopMenu = React.forwardRef<PopMenuRefType, Props>((props, ref) => {
  const {
    content,
    trigger = 'click',
    placement = 'bottom-right',
    arrow = false,
    offset,
    className,
    closeOnClick = true,
    hoverDelay = 100,
    closeOnClickOutside = true,
    children,
    ...popoverRest
  } = props;
  const timerRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }));

  let actionProps = {};

  if (trigger === 'click') {
    actionProps = {
      onClick: () => {
        setVisible(true);
      },
    };
  } else if (trigger === 'hover') {
    actionProps = {
      onMouseEnter: () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        setVisible(true);
      },
      onMouseLeave: () => {
        timerRef.current = window.setTimeout(() => {
          setVisible(false);
        }, hoverDelay);
      },
    };
  }

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  // add active class to trigger el
  const otherProps = {
    className: clsx(React.isValidElement(children) ? (children.props as Props)?.className : '', {
      active: visible,
      visible: visible,
    }),
  };

  return (
    <StyledPopover
      {...popoverRest}
      className={clsx('uc-popmenu', className)}
      visible={visible}
      onClose={onClose}
      placement={placement}
      closeOnClickOutside={closeOnClickOutside}
      content={
        <div
          onClick={(e: SyntheticEvent) => {
            e.stopPropagation();
            if (closeOnClick) {
              onClose();
            }
          }}
        >
          {content}
        </div>
      }
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
    </StyledPopover>
  );
});
PopMenu.displayName = 'UC-PopMenu';

export default PopMenu;
