import React, { useState } from 'react';
import styled from 'react-uni-comps/styled';
import { Space, Switch } from 'react-uni-comps';

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
        <Switch defaultChecked /> defaultChecked
        <Switch disabled defaultChecked />
      </Space>
    </StyledContent>
  );
}
