import React, { useState } from 'react';
import { ActionSheet, Button } from '../src';

export default function App() {
  const actions = [
    { text: '复制', key: 'copy' },
    { text: '修改', key: 'edit', disabled: true },
    {
      text: '删除',
      key: 'delete',
      description: '删除后数据不可恢复',
      color: 'red',
    },
  ];

  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>禁用和危险的选项</Button>
      <ActionSheet
        extra={'禁用和危险的选项'}
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </>
  );
}
