import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import { ActionSheet, Button } from 'react-uni-comps';

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

  const [visible, setVisible] = useState(false);
  return (
    <PageWrap>
      <Button type="primary" block style={{ marginTop: 40 }} onClick={() => setVisible(true)}>
        打开动作面板
      </Button>
      <ActionSheet
        extra={'ActionSheet 动作面板'}
        cancelText="取消"
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
      />
    </PageWrap>
  );
}
