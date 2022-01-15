import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Space, Button, Notify, Icon, isMobile } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock style={{ marginTop: 100 }} title="顶部全局消息通知">
        <Space size={16} wrap>
          <Button type="primary" onClick={() => Notify.show('明天不上学')}>
            默认
          </Button>

          <Button
            type="primary"
            onClick={() =>
              Notify.show({
                content:
                  '习近平总书记在三河村考察时强调，发展特色产业、长期稳定致富，都需要人才。要培养本地人才，引导广大村民学文化、学技能，提高本领，还要移风易俗，通过辛勤劳动脱贫致富。',
                style: {
                  height: 100,
                  width: isMobile ? '100vw' : '50vw',
                },
                duration: 3000,
              })
            }
          >
            自定义
          </Button>
          <Button
            type="primary"
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
            type="primary"
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
