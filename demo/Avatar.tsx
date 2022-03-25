import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Avatar, Space } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Avatar />
      </DemoBlock>

      <DemoBlock title="尺寸">
        <Space size={30}>
          <Avatar size={60}></Avatar>

          <Avatar size={80} style={{ color: 'red' }}></Avatar>

          <Avatar size={90}></Avatar>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义">
        <Space wrap size={30}>
          <Avatar>W</Avatar>

          <Avatar size={64}>
            <img
              src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K`}
            />
          </Avatar>

          <Avatar size={80}>
            <img src={`https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF`} />
          </Avatar>

          <Avatar shape="square" size={90}>
            <img src={`https://t7.baidu.com/it/u=3332251293,4211134448&fm=193&f=GIF`} />
          </Avatar>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
