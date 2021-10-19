import React from 'react';
import { Avatar, Space } from '../src';
import styled from '../src/styled';
import { UserOutlined } from '@ant-design/icons';

export default function App() {
  return (
    <div style={{ margin: 50 }}>
      <Avatar>
        <UserOutlined />
      </Avatar>
      <Avatar size={64} style={{ margin: '0 16px' }}>
        <UserOutlined />
      </Avatar>

      <Avatar size={64} style={{ margin: '0 16px', fontSize: 24 }}>
        <UserOutlined />
      </Avatar>

      <Avatar style={{ margin: '0 16px' }}>W</Avatar>

      <Avatar size={64} style={{ margin: '0 16px' }}>
        <img
          src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K`}
        />
      </Avatar>

      <Avatar size={120} style={{ margin: '0 16px', fontSize: 32 }}>
        <img src={`https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF`} />
      </Avatar>

      <Avatar shape="square" size={120} style={{ margin: '30px', borderRadius: 30 }}>
        <img src={`https://t7.baidu.com/it/u=3332251293,4211134448&fm=193&f=GIF`} />
      </Avatar>
    </div>
  );
}
