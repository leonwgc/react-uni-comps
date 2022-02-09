import React, { useCallback, useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tabs, Space, Button, Drawer, styled, isMobile, Modal, AlertDialog } from 'react-uni-comps';

const StyledTabs = styled(Tabs)`
  flex-basis: 50px;
  .uc-tabs-header-wrap {
    height: 50px;
    padding-left: 20px;
  }
  .uc-tabs-header-item {
    flex: 0 0 120px;

    &.active {
      background: rgba(0, 75, 204, 0.08);
    }
  }
`;

const StyledFooter = styled.div`
  flex-basis: 50px;
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

  const [v, setV] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <PageWrap>
      <DemoBlock title="抽屉">
        <Button type="primary" onClick={() => setVisible(true)} style={{ margin: 20 }}>
          打开抽屉
        </Button>
      </DemoBlock>

      <Drawer
        position="right"
        onClose={onClose}
        visible={visible}
        style={{ width: isMobile ? '80vw' : 600 }}
        header={
          <StyledTabs underline={false} value={index} onChange={setIndex}>
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
        <div style={{ padding: 20 }}>
          {index === 0 ? 'tab1 ' : 'tab2 '}
          <Space size={16} style={{ marginTop: 30, display: 'flex' }}>
            <Button onClick={() => setV(true)}>打开弹框</Button>

            <Button
              type="primary"
              onClick={() =>
                AlertDialog.show({
                  confirmText: `got it`,
                  content: 'how are you guy',
                  onConfirm: (close) => close(),
                })
              }
            >
              打开确认弹框
            </Button>
          </Space>
        </div>
      </Drawer>
      <Modal
        header="hello"
        mask={false}
        closable
        style={{ width: isMobile ? '70vw' : 300, height: 180 }}
        visible={v}
        onClose={() => setV(false)}
      >
        hello,world
      </Modal>
    </PageWrap>
  );
}
