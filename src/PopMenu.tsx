import React, { useState, useRef } from 'react';
import Popover from './Popover';
import { Placement } from './popovers/types';
import styled from 'styled-components';
import clsx from 'clsx';

const StylePopover = styled(Popover)`
  color: #fff;
  opacity: 0.85;
  background-color: rgb(0, 0, 0);
  padding: 12px;
`;

type Offset = { x?: number; y?: number };

const mouseLeaveDelay = 100;

export type Props = {
  className?: string;
  /** menu容器 */
  content?: React.ReactNode;
  /** 显示箭头,默认不显示 */
  arrow?: boolean;
  /** 显示位置,默认bottom底部,参考popover */
  placement?: Placement;
  /** 需要tooltip的子元素 */
  children: React.ReactElement;
  /** 弹框自定义偏移 */
  offset?: Offset;
  /** 触发方式 */
  trigger: 'click' | 'hover' | 'focus';
};

/** click/hover/focus 弹出菜单, 默认click, 基于Popover */
const PopMenu = (props: Props): React.ReactElement => {
  const {
    content,
    trigger = 'click',
    placement = 'bottom',
    arrow = false,
    offset,
    className,
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
        }, mouseLeaveDelay);
      },
    };
  } else {
    actionProps = {
      onFocus: () => {
        if (ref.current) {
          clearTimeout(ref.current);
        }
        setVisible(true);
      },
    };
  }

  return (
    <StylePopover
      className={clsx('uc-popmenu', className)}
      visible={visible}
      onClose={() => setVisible(false)}
      placement={placement}
      closeOnClickOutside
      content={
        <span
          onClick={() => {
            clearTimeout(ref.current);
            setTimeout(() => {
              setVisible(false);
            }, mouseLeaveDelay);
          }}
        >
          {content}
        </span>
      }
      arrow={arrow}
      offset={offset}
      {...actionProps}
    >
      {React.isValidElement(children) ? (
        React.cloneElement(children, actionProps)
      ) : (
        <span {...actionProps}>{children}</span>
      )}
    </StylePopover>
  );
};
PopMenu.displayName = 'UC-PopMenu';

export default PopMenu;
