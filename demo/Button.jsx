import React from 'react';
import styled from 'styled-components';
import { Space, Button } from 'react-uni-comps';
import { SearchOutlined } from '@ant-design/icons';
import 'animate.css';
import './Tab.less';

const StyledContent = styled.div`
  padding: 20px;
`;

export default function App() {
  return (
    <StyledContent>
      <Space wrap>
        <Button>hello</Button>
        <Button height={40}>hello</Button>
        <Button type="primary">hello</Button>
        <Button type="primary" height={40}>
          hello
        </Button>
        <Button type="primary" color="#FF2929">
          hello
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
    </StyledContent>
  );
}
