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
      <Space>
        <Button>hello</Button>
        <Button type="primary">hello</Button>
        <Button type="primary" color="#FF2929">
          hello
        </Button>
        <Button type="default" style={{ borderStyle: 'dashed' }}>
          hello
        </Button>

        <Button type="default" style={{ borderRadius: '50%', width: 40, height: 40 }}>
          hello
        </Button>
        <Button type="primary" style={{ borderRadius: '50%', width: 32, height: 32 }}>
          <SearchOutlined />
        </Button>
        <Button style={{ borderRadius: '50%', width: 32, height: 32 }}>
          <SearchOutlined />
        </Button>
        <Button color="#00bc8d">hello</Button>
      </Space>
    </StyledContent>
  );
}
