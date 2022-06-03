import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Space, Button, Notify, Icon } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock style={{ marginTop: 100 }} title="顶部全局消息通知">
        <Space size={16} wrap>
          <Button onClick={() => Notify.show('明天不上学')}>默认</Button>

          <Button
            onClick={() =>
              Notify.show({
                content: '顶部全局消息通知',
                duration: 3000,
              })
            }
          >
            自定义
          </Button>
          <Button
            onClick={() =>
              Notify.show(
                <Space size={4}>
                  <Icon type="uc-icon-jinggao" style={{ fontSize: 16 }} />
                  明天不上学
                </Space>
              )
            }
          >
            自定义内容
          </Button>
          <Button
            onClick={() =>
              Notify.show({
                content: '明天不上学',
                duration: 2000,
                style: {
                  backgroundColor: '#00bc8d',
                  color: '#fff',
                },
              })
            }
          >
            自定义样式
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
