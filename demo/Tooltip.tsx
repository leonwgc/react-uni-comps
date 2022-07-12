import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Tooltip, Button, Space, AutoCenter, Cell, Switch } from 'react-uni-comps';

export default function App() {
  const [animate, setAnimate] = useState(true);
  return (
    <PageWrap>
      <Cell
        title="动画效果"
        content={<Switch checked={animate} onChange={(a) => setAnimate(a)}></Switch>}
      ></Cell>
      <DemoBlock title="不同位置">
        <AutoCenter>
          <Space>
            <Tooltip title="This's tooltip" animate={animate}>
              <Button>默认</Button>
            </Tooltip>

            <Tooltip
              animate={animate}
              offset={{ x: -10, y: 15 }}
              arrow={false}
              placement="right"
              title="This's tooltip"
            >
              <Button>右侧</Button>
            </Tooltip>
          </Space>
        </AutoCenter>
      </DemoBlock>

      <DemoBlock title="样式">
        <AutoCenter>
          <Tooltip title="This's tooltip" style={{ background: 'red', fontSize: 12 }}>
            <Button>自定义样式</Button>
          </Tooltip>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
