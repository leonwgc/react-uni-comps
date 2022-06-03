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
  const [v, setV] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Button onClick={() => setV(true)}>默认</Button>

        <Modal
          style={{ width: '75%' }}
          visible={v}
          onClose={() => setV(false)}
          header="标题"
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
      </DemoBlock>

      <DemoBlock title="自定义">
        <Button onClick={() => setVisible(true)}>自定义</Button>

        <StyledModal
          visible={visible}
          closable
          style={{ width: '75%' }}
          onClose={() => setVisible(false)}
          header={'自定义'}
        >
          <div>body 区域</div>
        </StyledModal>
      </DemoBlock>
    </PageWrap>
  );
}
