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
      <DemoBlock>
        <AutoCenter>
          <Space>
            <Tooltip title="This's tooltip" animate={animate}>
              <Button type="primary">默认</Button>
            </Tooltip>

            <Tooltip
              animate={animate}
              offset={{ x: -10, y: 15 }}
              arrow={false}
              placement="right"
              title="This's tooltip"
            >
              <Button type="primary">右侧</Button>
            </Tooltip>

            <Tooltip title="This's tooltip" style={{ background: 'red', fontSize: 12 }}>
              <Button type="primary">自定义样式</Button>
            </Tooltip>
          </Space>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
