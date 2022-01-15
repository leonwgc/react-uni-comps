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
  }
  .body {
    padding-top: 16px;
  }
`;

const StyleMobileModal = styled(Modal)`
  width: 297px;
  border-radius: 12px;

  .body {
    font-size: 15px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    color: #262626;
    line-height: 22px;
    margin-bottom: 20px;
  }

  .uc-btn {
    width: 120px;
    height: 39px;
    border-radius: 21px;
  }
`;

export default function App() {
  const [visible, setVisible] = useState(false);
  const [v, setV] = useState(false);
  const onClose = () => setVisible(false);
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Button type="primary" onClick={() => setVisible(true)}>
          打开弹框
        </Button>
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <Button onClick={() => setV(true)} style={{ marginRight: 20 }}>
          自定义样式
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

      <StyleMobileModal
        visible={v}
        closeOnMaskClick={false}
        onClose={() => setV(false)}
        footer={
          <Space size={16} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => setV(false)}>取消</Button>
            <Button type="primary" onClick={() => setV(false)}>
              确定
            </Button>
          </Space>
        }
      >
        确认给张伟投票?
      </StyleMobileModal>
    </PageWrap>
  );
}
