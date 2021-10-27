import React, { useCallback, useState } from 'react';
import { Icon, Tabs, Popup, Space, Button, Avatar } from '../src';
import Drawer from '../src/Drawer';
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

const StyledPopupContent = styled.div`
  width: 640px;
  background: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledBody = styled.div`
  padding: 20px;
  flex: 1;
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

const StyledRightGroup = styled.div`
  .btn-new {
    width: 124px;
    height: 36px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
  }
  .card-list {
    .card-item {
      display: flex;
      height: 65px;
      background: #ffffff;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      margin: 8px 0;
      padding: 18px 12px;
      align-items: center;

      .content {
        .title {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #1a1a1a;
          line-height: 20px;
        }
        .desc {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #8c8c8c;
          line-height: 17px;
        }
      }
    }
  }
`;

export default function RightDrawer(props) {
  const [list, setList] = useState([
    { title: '默认', desc: '公司内拥有OKR权限且一级部门相同，拥有汇报线关联关系的用户' },
    { title: '仅上级可见', desc: '可用于需保密的 OKR 上' },
  ]);
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
        header={
          <StyledTabs underline={false} value={index} onChange={setIndex}>
            <Tabs.Tab title="权限设置" />
            <Tabs.Tab title="权限组管理" />
          </StyledTabs>
        }
        footer={
          <StyledFooter>
            <Space size={16}>
              <Button type="primary" style={{ width: 80 }}>
                保存
              </Button>
              <Button style={{ width: 80 }}>取消</Button>
            </Space>
          </StyledFooter>
        }
      >
        <StyledRightGroup style={{ padding: 20 }}>
          <Button className="btn-new" icon={<Icon type="icon-jia2" />}>
            新建权限组
          </Button>
          <div className="card-list">
            {list.map((item, idx) => (
              <div className="card-item" key={idx}>
                <Avatar size={28} style={{ marginRight: 12 }}></Avatar>
                <div className="content">
                  <div className="title">{item?.title}</div>
                  <div className="desc">{item?.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </StyledRightGroup>
      </Drawer>
    </>
  );
}
