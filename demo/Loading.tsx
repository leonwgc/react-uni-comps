import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Button, Space, Loading } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="加载Loading">
        <Space>
          <Button
            onClick={() => {
              Loading.show();

              setTimeout(() => {
                Loading.hide();
              }, 3000);
            }}
          >
            显示Loading
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
