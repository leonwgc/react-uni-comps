import React, { useCallback, useState } from 'react';
import { Tabs, Space, Button, Avatar, Drawer } from '../src';
import styled from '../src/styled';

// example to implement Drawer

const StyledTabs = styled(Tabs)`
  flex-basis: 50px;
  .uc-tabs-header-wrap {
    height: 50px;
  }
  .uc-tabs-header-item {
    flex: none;
    width: 120px;

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
  padding: 0 20px;
`;

const StyledBody = styled.div`
  padding: 16px;
`;

export default function RightDrawer(props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        open drawer
      </Button>

      <Drawer
        position="right"
        onClose={onClose}
        visible={visible}
        wrapStyle={{ width: '60vw' }}
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
        <StyledBody>
          <Avatar /> {index === 0 ? 'tab1 body' : 'tab2 body'}
        </StyledBody>
      </Drawer>

     
    </>
  );
}
