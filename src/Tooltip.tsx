import React, { useState, useRef } from 'react';
import { Popover } from '../src';
import styled from 'styled-components';
import { Placement } from './Popover/types';
import clsx from 'clsx';

const StylePopover = styled(Popover)`
  color: #fff;
  padding: 8px;
`;

export type Props = {
  title?: React.ReactNode;
  bgColor?: string;
  placement?: Placement;
  children: React.ReactElement;
};

/** Tooltip */
const Tooltip = (props: Props): React.ReactElement => {
  const { title, bgColor = 'black', placement = 'top', children } = props;
  // 鼠标移到popover内容区，不关闭popover
  const ref = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  return (
    <StylePopover
      className={clsx('uc-tooltip')}
      style={{ background: bgColor }}
      visible={visible}
      onMouseEnter={() => {
        if (ref.current) {
          clearTimeout(ref.current);
        }
        setVisible(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setVisible(false);
        }, 300);
      }}
      placement={placement}
      content={title}
    >
      {React.cloneElement(children, {
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => {
          ref.current = window.setTimeout(() => {
            setVisible(false);
          }, 300);
        },
      })}
    </StylePopover>
  );
};
Tooltip.displayName = 'UC-Tooltip';

export default Tooltip;
