import React, { useState } from 'react';
import { Spinner, Space, Button, Notify } from '../src';
import { InfoCircleFilled } from '@ant-design/icons';

export default function App() {
  const [v, setV] = useState(true);
  return (
    <div className="app">
      <Button
        style={{ marginTop: 300 }}
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
        style={{ marginTop: 300 }}
        type="primary"
        onClick={() =>
          Notify.show({
            content: '明天不上学',
            icon: <InfoCircleFilled />,
            duration: 1000,
            style: {
              backgroundColor: 'red',
              margin: 16,
              borderRadius: 8,
            },
          })
        }
      >
        Notify.show with style
      </Button>
    </div>
  );
}
