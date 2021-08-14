import React from 'react';
import styled from 'styled-components';
import { Space, Button } from 'react-uni-comps';
import { SearchOutlined } from '@ant-design/icons';

const StyledContent = styled.div`
  padding: 20px;

  button {
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
        <Button color="#ff4d4f">danger color</Button>
        <Button type="primary" height={40}>
          hello
        </Button>
        <Button type="primary" color="#ff4d4f">
          danger
        </Button>
        <Button type="default" dashed>
          hello
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
        <Button type="primary">
          <Space>
            <SearchOutlined /> 搜索
          </Space>
        </Button>
        <Button>
          <Space>
            <SearchOutlined /> 搜索
          </Space>
        </Button>

        <Button color="#00bc8d">hello</Button>
        <Button color="#00bc8d" dashed>
          hello
        </Button>
        <Button color="#00bc8d" dashed height={60}>
          hello
        </Button>
      </Space>
      <div>
        <Button block style={{ marginBottom: 10 }}>
          hello
        </Button>
        <Button type="primary" block style={{ marginBottom: 10 }}>
          hello
        </Button>
        <Button type="primary" color="#00bc8d" block height={40}>
          dr
        </Button>
        <Button block height={40} color="gray" type="primary"></Button>
        <Button block height={80}></Button>
      </div>
    </StyledContent>
  );
}
