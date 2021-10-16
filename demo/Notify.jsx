import React, { useState } from 'react';
import { Spinner, Space, Button, Notify } from '../src';
import { InfoCircleFilled } from '@ant-design/icons';

export default function App() {
  return (
    <div style={{ margin: '200px auto' }}>
      <Space size={16}>
        <Button
          type="primary"
          onClick={() =>
            Notify.show({
              icon: <InfoCircleFilled />,
              content: '明天不上学',
            })
          }
        >
          Notify.show
        </Button>
        <Button
          type="primary"
          onClick={() =>
            Notify.show({
              content: '明天不上学',
              icon: <InfoCircleFilled />,
              duration: 1000,
              style: {
                width: 300,
                border: '1px solid #ccc',
                backgroundColor: '#00bc8d',
                borderRadius: 8,
                margin: '50px 20px 0',
              },
            })
          }
        >
          Notify.show with style
        </Button>
      </Space>
    </div>
  );
}
