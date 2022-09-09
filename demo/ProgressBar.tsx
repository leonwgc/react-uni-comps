import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ProgressBar, Button, Icon, Space } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState(50);
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <ProgressBar percent={20} />

        <Space>
          <ProgressBar percent={20} style={{ width: 150 }} />
          <span style={{ fontSize: 12 }}>20%</span>
        </Space>

        <ProgressBar percent={100} />
      </DemoBlock>

      <DemoBlock style={{ textAlign: 'center' }}>
        <Space>
          <Button
            icon={<Icon type="uc-icon-jian2" />}
            circle
            onClick={() =>
              setV((v) => {
                return v - 10 >= 0 ? v - 10 : 0;
              })
            }
          ></Button>
          <Button
            type="primary"
            icon={<Icon type="uc-icon-jia2" />}
            circle
            onClick={() =>
              setV((v) => {
                return v + 10 <= 100 ? v + 10 : 100;
              })
            }
          ></Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义">
        <ProgressBar percent={v} height={10} />
        <ProgressBar
          percent={v}
          style={{
            margin: '24px 0',
            height: 16,
            borderRadius: 10,
          }}
        />
        <ProgressBar
          percent={v}
          height={16}
          fillColor="#712fd1"
          style={{ borderRadius: 15, width: '80vw' }}
        />
      </DemoBlock>
    </PageWrap>
  );
}
