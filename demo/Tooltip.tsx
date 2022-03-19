import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tooltip, Button, Space, styled, Cell, Switch } from 'react-uni-comps';

export default function App() {
  const [animate, setAnimate] = useState(true);
  return (
    <PageWrap>
      <Cell
        title="动画效果"
        content={<Switch checked={animate} onChange={(a) => setAnimate(a)}></Switch>}
      ></Cell>
      <DemoBlock title="不同位置">
        <Space size={16}>
          <Tooltip
            animate={animate}
            offset={{ x: -10, y: 15 }}
            arrow={false}
            placement="right"
            title="右侧"
          >
            <Button>右侧</Button>
          </Tooltip>

          <Tooltip title="默认上侧" animate={animate}>
            <Button>默认</Button>
          </Tooltip>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
