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
        // flip={true}
        closable
        wrapStyle={{ width: 320 }}
        // style={{ transition: 'none' }}
        onClose={onClose}
        header={<h3>头部</h3>}
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
