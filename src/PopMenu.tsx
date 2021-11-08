import React, { useState, useRef, useCallback, SyntheticEvent } from 'react';
import Popover from './Popover';
import { Placement } from './popovers/types';
import styled from 'styled-components';
import clsx from 'clsx';
import { boxShadow } from './colors';

type Offset = { x?: number; y?: number };

const StyledPopover = styled(Popover)`
  background: #fff;
  border-radius: 2px;
  box-shadow: ${boxShadow};
`;

export type Props = {
  className?: string;
  /** menu容器 */
  content?: React.ReactNode;
  /** 显示箭头,默认不显示 */
  arrow?: boolean;
  /** 显示位置,默认bottom-right底部,参考popover */
  placement?: Placement;
  /** 需要tooltip的子元素 */
  children: React.ReactElement;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /** 触发方式 */
  trigger: 'click' | 'hover';
  /** 点击内容区域关闭,默认true */
  closeOnClick?: boolean;
  /** hover触发显示，关闭的timeout时间，默认100 (ms) */
  hoverDelay?: number;
};

/** click/hover 弹出菜单, 默认click, 基于Popover */
const PopMenu = (props: Props): React.ReactElement => {
  const {
    content,
    trigger = 'click',
    placement = 'bottom-right',
    arrow = false,
    offset,
    className,
    closeOnClick = true,
    hoverDelay = 100,
    children,
  } = props;
  const ref = useRef<number>(0);
  const [visible, setVisible] = useState(false);

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
    };
  }

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  const otherProps = {
    className: clsx(React.isValidElement(children) ? (children.props as Props)?.className : '', {
      active: visible,
    }),
  };

  return (
    <StyledPopover
      className={clsx('uc-popmenu', className)}
      visible={visible}
      onClose={onClose}
      placement={placement}
      closeOnClickOutside
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
};
PopMenu.displayName = 'UC-PopMenu';

export default PopMenu;
