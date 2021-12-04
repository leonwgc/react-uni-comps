import React, { useState } from 'react';
import { SoundOutlined } from '@ant-design/icons';
import { NoticeList, Button, styled } from 'react-uni-comps';

const StyledNoticeList = styled(NoticeList)`
  background-color: rgb(251, 248, 220);
  color: red;
  margin-top: 30px;
  height: 50px;
  font-size: 16px;
  padding: 0 8px;
`;

export default function App() {
  const [list, setList] = useState([
    { text: '买超值优惠' },
    { text: '1华为畅享9新品即将上市，活动期间0元预约' },
    { text: '赢HUAWEI WATCH等好礼，更多产品信息请持续关注！' },
    { text: '弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示' },
  ]);

  const [list1] = useState([
    { text: '买超值优惠11', link: 'https://www.baidu.com/' },
    { text: '1华为畅享9新品即将上市，活动期间0元预约1', link: 'https://www.baidu.com/' },
    { text: '赢HUAWEI WATCH等好礼，更多产品信息请持续关注！2', link: 'https://www.baidu.com/' },
    {
      text: '弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示3',
      link: 'https://www.baidu.com/',
    },
  ]);
  return (
    <div className="app">
      <NoticeList
        icon={<SoundOutlined />}
        closeable
        extra={
          <div>
            <SoundOutlined /> hello
          </div>
        }
        list={list}
      />

      <StyledNoticeList list={list1} stayTime={1000} />

      <Button
        style={{ marginTop: 30 }}
        type="primary"
        onClick={() => {
          list.push({ text: 'item1' }, { text: 'item2' });
          setList([...list]);
        }}
      >
        add more data
      </Button>
    </div>
  );
}
