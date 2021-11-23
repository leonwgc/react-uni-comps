import React, { useState } from 'react';
import { styled, Space, Modal, Button, isMobile } from '../src';

const StyledModal = styled(Modal)`
  color: #1a1a1a;
  .header {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    line-height: 20px;
  }
  .body {
    padding-top: 16px;
  }
`;

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

      <StyledModal
        visible={visible}
        closable
        style={{ width: isMobile ? '70vw' : 600, height: 300, top: isMobile ? '40%' : 120 }}
        onClose={onClose}
        header={'新建权限组'}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Space size={16}>
              <Button style={{ width: 80, height: 32 }} onClick={onClose}>
                取消
              </Button>
              <Button type="primary" style={{ width: 80, height: 32 }} onClick={onClose}>
                确定
              </Button>
            </Space>
          </div>
        }
      >
        <div>body 区域</div>
      </StyledModal>
    </div>
  );
}
