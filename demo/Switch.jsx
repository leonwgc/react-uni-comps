import React, { useState } from 'react';
import styled from 'styled-components';
import { Space, Switch } from 'react-uni-comps';
import { SearchOutlined } from '@ant-design/icons';

const StyledContent = styled.div`
  div {
    margin: 8px 0;
  }
`;

export default function App() {
  const [c, setC] = useState(false);
  return (
    <StyledContent>
      <Space wrap>
        <Switch checked={c} onChange={setC} />
        {c ? 'checked' : 'unchecked'}
        <Switch checked />
        <Switch defaultChecked />
        <Switch defaultChecked disabled />
        <Switch disabled />
        <Switch color="#00bc8d" defaultChecked />
        <Switch disabled color="#00bc8d" defaultChecked />
      </Space>
    </StyledContent>
  );
}
