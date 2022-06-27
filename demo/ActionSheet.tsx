import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ActionSheet, Button, Cell, Switch, Toast } from 'react-uni-comps';

export default function App() {
  const actions = [
    { text: '复制', onClick: () => Toast.show('复制') },
    { text: '修改', disabled: true },
    {
      text: '删除',
      description: '删除后数据不可恢复',
      color: 'red',
    },
  ];

  const [visible, setVisible] = useState(false);

  const [cancelText, setCancelText] = useState('取消');
  const [borderRadius, setBorderRadius] = useState(8);

  return (
    <PageWrap>
      <Cell
        title="显示取消"
        content={
          <Switch checked={!!cancelText} onChange={(c) => setCancelText(c ? '取消' : '')}></Switch>
        }
      />
      <Cell
        title="显示圆角"
        content={
          <Switch checked={borderRadius > 0} onChange={(c) => setBorderRadius(c ? 8 : 0)}></Switch>
        }
      />
      <DemoBlock title="动作面板">
        <Button onClick={() => setVisible(true)}>打开动作面板</Button>
      </DemoBlock>

      <ActionSheet
        style={{ borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius }}
        extra={'动作面板'}
        cancelText={cancelText}
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
        onCancel={() => Toast.show('action canceled')}
      />
    </PageWrap>
  );
}
