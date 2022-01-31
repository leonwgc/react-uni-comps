import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { styled, Space, Modal, Button, isMobile } from 'react-uni-comps';

const StyledModal = styled(Modal)`
  color: #1a1a1a;
  .header {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    line-height: 20px;
    color: red;
  }
  .body {
    padding-top: 16px;
  }
`;

export default function App() {
  const [visible, setVisible] = useState(false);
  const [v, setV] = useState(false);
  const onClose = () => setVisible(false);
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Button onClick={() => setV(true)} style={{ marginRight: 20 }}>
          给张伟投票
        </Button>
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <Button type="primary" onClick={() => setVisible(true)}>
          新建角色
        </Button>
      </DemoBlock>

      <StyledModal
        visible={visible}
        closable
        style={{ width: isMobile ? '70vw' : 420, height: 160, top: isMobile ? '40%' : 120 }}
        onClose={onClose}
        header={'新建角色'}
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

      <Modal visible={v} onClose={() => setV(false)}>
        <Space direction="vertical" size={30} style={{ width: 280 }}>
          <h3>投票确认</h3>
          <div>确认给张伟投票?</div>
          <Space size={16} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => setV(false)}>取消</Button>
            <Button type="primary" onClick={() => setV(false)}>
              确定
            </Button>
          </Space>
        </Space>
      </Modal>
    </PageWrap>
  );
}
