import React from 'react';
import styled from 'styled-components';
import { Space, Button } from '../src';
import { SearchOutlined } from '@ant-design/icons';

const StyledContent = styled.div`
  .uc-btn {
    margin: 8px 0;
  }
`;

export default function App() {
  return (
    <StyledContent>
      <Space wrap>
        <Button disabled onClick={() => console.log(1)}>
          hello
        </Button>
        <Button disabled type="primary" onClick={() => console.log(1)}>
          hello
        </Button>
        <Button type="primary" onClick={() => console.log(1)}>
          hello
        </Button>

        <Button type="primary">hello</Button>

        <Button type="primary" loading>
          hello
        </Button>

        <Button loading onClick={() => console.log('hello')}>
          hello
        </Button>

        <Button danger>danger default</Button>
        <Button danger disabled>
          danger disabled
        </Button>
        <Button danger type="primary">
          danger primary
        </Button>
        <Button danger type="primary" disabled>
          danger primary disabled
        </Button>
        <Button type="primary" style={{ height: 40 }}>
          hello
        </Button>

        <Button type="primary" danger disabled>
          danger
        </Button>
        <Button type="default" dashed>
          hello
        </Button>

        <Button type="default" circle>
          <SearchOutlined />
        </Button>

        <Button>
          <SearchOutlined />
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          搜索
        </Button>

        <Button icon={<SearchOutlined />}>搜索</Button>

        <Button color="#00bc8d">hello</Button>
        <Button color="#00bc8d" dashed>
          hello
        </Button>
        <Button color="#00bc8d" dashed style={{ height: 60 }}>
          hello
        </Button>

        <Button as="a" target="_blank" href="https://www.baidu.com/">
          link button
        </Button>
      </Space>
      <div>
        <Button block style={{ marginBottom: 10 }}>
          hello
        </Button>
        <Button type="primary" block style={{ marginBottom: 10 }}>
          hello
        </Button>
        <Button type="primary" color="#00bc8d" block style={{ height: 40 }}>
          dr
        </Button>
        <Button as="div" block style={{ height: 40 }}>
          as div
        </Button>
        <Button as="div" block loading style={{ height: 40 }}>
          as div
        </Button>
      </div>
      <div style={{ background: '#333', padding: 16 }}>
        <Button block type="primary" ghost color="#00bc8d">
          hello
        </Button>
        <Button ghost> hello</Button>
        <Button ghost block>
          hello
        </Button>
        <Button ghost block type="primary">
          hello
        </Button>
        <Button ghost block type="primary" danger loading>
          danger primary
        </Button>

        <Button ghost block danger>
          danger default
        </Button>
      </div>
    </StyledContent>
  );
}
