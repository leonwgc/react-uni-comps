import React, { useCallback, useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tabs, Space, Button, Drawer, styled, isMobile } from 'react-uni-comps';

const StyledTabs = styled(Tabs)`
  .uc-tabs-header-wrap {
    height: 50px;
    padding-left: 20px;
  }
  .uc-tabs-header-item {
    width: 120px;

    &.active {
      background: rgba(0, 75, 204, 0.08);
    }
  }
`;

const StyledFooter = styled.div`
  height: 50px;
  background: #ffffff;
  box-shadow: 0px -1px 0px 0px #f5f5f5;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export default function RightDrawer(props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <PageWrap>
      <DemoBlock title="抽屉">
        <Button onClick={() => setVisible(true)} style={{ margin: 20 }}>
          打开抽屉
        </Button>
      </DemoBlock>

      <Drawer
        position="right"
        onClose={onClose}
        visible={visible}
        style={{ width: isMobile ? '80vw' : 420 }}
        header={
          <StyledTabs underline={false} value={index} onChange={(i) => setIndex(i)}>
            <Tabs.Tab title="tab1" />
            <Tabs.Tab title="tab2" />
          </StyledTabs>
        }
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
        <div style={{ padding: 20 }}>{index === 0 ? 'tab1 ' : 'tab2 '}</div>
      </Drawer>
    </PageWrap>
  );
}
