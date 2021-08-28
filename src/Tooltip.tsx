import React, { useState, useRef } from 'react';
import Popover from './Popover/index';
import styled from 'styled-components';
import { Placement } from './Popover/types';
import clsx from 'clsx';

const StylePopover = styled(Popover)`
  color: #fff;
  padding: 8px;

  .uc-tooltip-content {
    display: inline-block;
    min-width: 30px;
    max-width: 240px;
  }
`;

export type Props = {
  title?: React.ReactNode;
  arrow?: boolean;
  bgColor?: string;
  placement?: Placement;
  children: React.ReactElement;
};

/** 文字提示 */
const Tooltip = (props: Props): React.ReactElement => {
  const { title, bgColor = 'black', placement = 'top', arrow = true, children } = props;
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
      }, 300);
    },
  };

  const titleRender = () => {
    const otherProps = {
      className: clsx('uc-tooltip-content'),
    };
    if (React.isValidElement(title)) {
      return React.cloneElement(title, otherProps);
    } else {
      return <span {...otherProps}>{title}</span>;
    }
  };

  return (
    <StylePopover
      className={clsx('uc-tooltip')}
      style={{ background: bgColor }}
      visible={visible}
      placement={placement}
      content={titleRender()}
      arrow={arrow}
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
Tooltip.displayName = 'UC-Tooltip';

export default Tooltip;
