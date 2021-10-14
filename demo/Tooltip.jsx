import React from 'react';
import { Tooltip, Button, Space } from '../src';
import styled from '../src/styled';

const StyledToolTip = styled(Tooltip)`
  font-size: 14px;
  padding: 12px;
  color: red;
  background-color: #eee;
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Space direction="vertical" size={50} style={{ margin: '40vw 0 0 20vw' }}>
      <StyledToolTip title="modal的bottom-border紧贴内容的top-border，right-borders水平对齐">
        <Button>hello</Button>
      </StyledToolTip>

      <Tooltip
        offset={{ x: -10, y: 15 }}
        arrow={false}
        placement="right"
        title="modal的bottom-border紧贴内容的top-border，right-borders水平对齐"
      >
        <Button>right</Button>
      </Tooltip>

      <Tooltip title="modal的bottom-border紧贴内容的top-border，right-borders水平对齐">
        <Button>hello</Button>
      </Tooltip>
    </Space>
  );
}
