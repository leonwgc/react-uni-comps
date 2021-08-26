import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Space, Switch } from '../src';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

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
