import React, { useState } from 'react';
import { styled, Space, Modal, Button } from '../src';

export default function App() {
  const [visible, setVisible] = useState(false);
  const onClose = () => setVisible(false);
  return (
    <div style={{ margin: 50 }}>
      <Button type="primary" onClick={() => setVisible(true)}>
        open Modal left
      </Button>

      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', right: '10%', top: '10%' }}
      >
        open Modal right
      </Button>

      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', left: '10%', bottom: '10%' }}
      >
        open Modal bottom left
      </Button>

      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', right: '10%', bottom: '10%' }}
      >
        open Modal bottom right
      </Button>

      <Modal
        visible={visible}
        // flip={false}
        closable
        style={{ width: 420, height: 260 }}
        onClose={onClose}
        header={<h3>头部</h3>}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              height: 32,
              alignItems: 'center',
            }}
          >
            <Space>
              <Button type="primary" onClick={onClose}>
                保存
              </Button>
              <Button onClick={onClose}>取消</Button>
            </Space>
          </div>
        }
      >
        <div>body 区域</div>
      </Modal>
    </div>
  );
}
