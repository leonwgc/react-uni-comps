import React from 'react';
import { Tooltip, Button, Space } from '../src';

export default function App() {
  return (
    <Space direction="vertical" size={50} style={{ margin: '40vw 0 0 20vw' }}>
      <Tooltip
        title={
          <div style={{ padding: 8, width: 160 }}>
            modal的bottom-border紧贴内容的top-border，right-borders水平对齐
          </div>
        }
        bgColor="#00bc8d"
      >
        <Button>hello</Button>
      </Tooltip>

      <Tooltip
        placement="right"
        title="modal的bottom-border紧贴内容的top-border，right-borders水平对齐"
      >
        <Button>hello</Button>
      </Tooltip>

      <Tooltip title="modal的bottom-border紧贴内容的top-border，right-borders水平对齐">
        <Button>hello</Button>
      </Tooltip>
    </Space>
  );
}
