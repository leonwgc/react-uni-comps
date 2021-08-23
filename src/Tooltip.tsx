import React, { useState } from 'react';
import { Popover } from '../src';
import styled from 'styled-components';

const StyleContent = styled.div`
  color: #fff;
`;

export type Props = {
  title?: React.ReactNode;
  color?: string;
  children: React.ReactElement;
};

/** Tooltip */
const Tooltip = (props: Props): React.ReactElement => {
  const { title, bgColor = 'black', children } = props;
  const [visible, setVisible] = useState(false);

  return (
    <Popover
      style={{ padding: '8px', width: 'unset', background: bgColor }}
      visible={visible}
      placement="top"
      content={<StyleContent>{title}</StyleContent>}
    >
      {React.cloneElement(children, {
        onMouseEnter: () => setVisible(true),
        onMouseLeave: () => setVisible(false),
      })}
    </Popover>
  );
};
Tooltip.displayName = 'UC-Tooltip';

export default Tooltip;
