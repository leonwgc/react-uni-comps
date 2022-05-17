import React, { useCallback, useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Space, Button, Drawer, styled, isMobile } from 'react-uni-comps';

const StyledFooter = styled.div`
  height: 50px;
  background: #ffffff;
  box-shadow: 0px -1px 0px 0px #f5f5f5;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
`;

export default function RightDrawer(props) {
  const [visible, setVisible] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <PageWrap>
      <DemoBlock title="抽屉">
        <Button onClick={() => setVisible(true)}>打开抽屉</Button>
      </DemoBlock>

      <Drawer
        onClose={onClose}
        visible={visible}
        style={{ width: isMobile ? '80vw' : 420 }}
        header={<div style={{ padding: 20, fontSize: 20 }}>标题</div>}
        footer={
          <StyledFooter>
            <Space size={16}>
              <Button type="primary" style={{ width: 80 }} onClick={onClose}>
                保存
              </Button>
              <Button style={{ width: 80 }} onClick={onClose}>
                取消
              </Button>
            </Space>
          </StyledFooter>
        }
      >
        <div style={{ padding: 20 }}>this is content</div>
      </Drawer>
    </PageWrap>
  );
}
