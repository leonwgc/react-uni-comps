import React, { useCallback, useState } from 'react';
import { Tabs, Space, Button, Avatar, Drawer, styled, isMobile, Modal, AlertDialog } from '../src';

// example to implement Drawer

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
      color: #004bcc;
      border-bottom: 2px solid #004bcc;
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
    <>
      <Button type="primary" onClick={() => setVisible(true)} style={{ margin: 20 }}>
        open drawer
      </Button>

      <Drawer
        position="right"
        onClose={onClose}
        visible={visible}
        style={{ width: isMobile ? '60vw' : 600 }}
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
          <Avatar /> {index === 0 ? 'tab1 body' : 'tab2 body'}
          <Space size={16} style={{ marginTop: 30, display: 'flex' }}>
            <Button onClick={() => setV(true)}>open modal</Button>

            <Button type="primary" onClick={() => AlertDialog.show('hello', 'how are you')}>
              open alert dialog
            </Button>
          </Space>
        </div>
        <Modal
          header="hello"
          mask={false}
          closable
          style={{ zIndex: 201, width: 400, height: 260 }}
          visible={v}
          onClose={() => setV(false)}
        >
          hello,world
        </Modal>
      </Drawer>
    </>
  );
}
