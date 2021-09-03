import React, { useState } from 'react';
import { ActionSheet, Button } from '../src';

export default function App() {
  const actions = [
    { text: '复制', onClick: () => alert('复制') },
    { text: '修改', disabled: true },
    {
      text: '删除',
      description: '删除后数据不可恢复',
      color: 'red',
    },
  ];

  const [visible, setVisible] = useState(true);
  return (
    <>
      <Button onClick={() => setVisible(true)}>ActionSheet 动作面板</Button>
      <ActionSheet
        extra={'ActionSheet 动作面板'}
        cancelText="取消"
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </>
  );
}
