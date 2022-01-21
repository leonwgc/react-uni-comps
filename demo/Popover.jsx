import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Space, Popover, Button } from 'react-uni-comps';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <PageWrap>
      <DemoBlock title="气泡式卡片浮层">
        <Space wrap>
          <Popover
            placement="right"
            visible={visible}
            onClose={() => setVisible(false)}
            content={<div style={{ padding: 16 }}>I'm here</div>}
          >
            <Button onClick={() => setVisible(true)} onMouseOver={() => setVisible(true)}>
              hi, there
            </Button>
          </Popover>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
