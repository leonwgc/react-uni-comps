import React, { useState } from 'react';
import { Avatar, Space, Modal, Button } from '../src';
import styled from '../src/styled';

export default function App() {
  const [visible, setVisible] = useState(false);
  const onClose = () => setVisible(false);
  return (
    <div style={{ margin: 50 }}>
      <Button type="primary" onClick={() => setVisible(true)}>
        open Modal
      </Button>

      <Modal
        visible={visible}
        closeOnMaskClick
        closable
        wrapStyle={{ width: 320 }}
        onClose={onClose}
        header={'title'}
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
        <div style={{ padding: '24px 0' }}>this is content</div>
      </Modal>
    </div>
  );
}