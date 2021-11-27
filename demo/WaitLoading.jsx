import React, { useState } from 'react';
import { Tooltip, Button, Space, styled, WaitLoading, Spinner } from '../src';

export default function App() {
  const [v, setV] = useState(false);
  return (
    <div style={{ margin: 20 }}>
      <Space>
        <Button type="primary" onClick={() => setV(true)}>
          show spinner after 1s
        </Button>

        <Button onClick={() => setV(false)}>hide spinner </Button>
      </Space>

      <div style={{ marginTop: 24 }}>
        <WaitLoading wait={1000} visible={v}>
          <Spinner style={{ fontSize: 30, color: '#00bc8d' }} />
        </WaitLoading>
      </div>
    </div>
  );
}
