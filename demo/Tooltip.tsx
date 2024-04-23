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
            <Tooltip content="This's tooltip" transition={animate}>
              <Button type="primary">默认</Button>
            </Tooltip>

            <Tooltip transition={animate} placement="bottom" content="This's tooltip">
              <Button type="primary">下方</Button>
            </Tooltip>

            <Tooltip
              content="This's tooltip"
              transition={animate}
              style={{ background: 'red', fontSize: 12 }}
            >
              <Button type="primary">自定义样式</Button>
            </Tooltip>
          </Space>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
