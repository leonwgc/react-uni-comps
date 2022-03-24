import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { styled, Space, Modal, Button } from 'react-uni-comps';

const StyledModal = styled(Modal)`
  color: #1a1a1a;
  .header {
    color: red;
    font-weight: bold;
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
        <Button onClick={() => setV(true)}>默认样式</Button>
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <Button type="primary" onClick={() => setVisible(true)}>
          自定义
        </Button>
      </DemoBlock>

      <StyledModal
        visible={visible}
        closable
        style={{ width: 280 }}
        onClose={onClose}
        header={'确定取消'}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Space size={16}>
              <Button onClick={onClose}>取消</Button>
              <Button type="primary" onClick={onClose}>
                确定
              </Button>
            </Space>
          </div>
        }
      >
        <div>body 区域</div>
      </StyledModal>

      <Modal
        style={{ width: 280 }}
        visible={v}
        onClose={() => setV(false)}
        header="tip"
        footer={
          <Space>
            <Button onClick={() => setV(false)}>取消</Button>
            <Button type="primary" onClick={() => setV(false)}>
              确定
            </Button>
          </Space>
        }
      >
        hello,world
      </Modal>
    </PageWrap>
  );
}
