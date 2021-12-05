import React, { useState } from 'react';
import { Space, Button, Notify, Icon, isMobile } from 'react-uni-comps';

export default function App() {
  return (
    <div style={{ margin: '100px 16px' }}>
      <Space size={16} direction="vertical">
        <Button type="primary" onClick={() => Notify.show('明天不上学')}>
          Notify.show
        </Button>
        <Button
          type="primary"
          onClick={() =>
            Notify.show(
              <Space size={4}>
                <Icon type="uc-icon-jinggao" style={{ fontSize: 16 }} />
                明天不上学
              </Space>
            )
          }
        >
          Notify.show with icon
        </Button>
        <Button
          type="primary"
          onClick={() =>
            Notify.show({
              content: '明天不上学',
              duration: 1000,
              style: {
                backgroundColor: '#00bc8d',
                color: '#fff',
                height: isMobile ? 60 : 40,
                display: 'flex',
                alignItems: 'center',
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
