import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { NoticeBar, Icon } from 'react-uni-comps';

const text = `各位请注意，当前文本超出了屏幕宽度，组件会自动开启滚动功能，前后停留时间和滚动速度可以自定义设置`;

export default function App() {
  return (
    <PageWrap style={{ padding: 0 }}>
      <DemoBlock title="默认">
        <NoticeBar content={text} />
      </DemoBlock>

      <DemoBlock title="可关闭">
        <NoticeBar content={text} closeable />
      </DemoBlock>

      <DemoBlock title="自定义延迟开始时间,默认2s">
        <NoticeBar content={text} delay={0} />
      </DemoBlock>

      <DemoBlock title="自定义icon">
        <NoticeBar content={text} icon={<Icon type="uc-icon-tips" />} />
      </DemoBlock>

      <DemoBlock title="extra配置">
        <NoticeBar
          content={text}
          extra={
            <div style={{ color: '#111' }}>
              <Icon type="uc-icon-chenggong" /> bingo
            </div>
          }
        />
      </DemoBlock>

      <DemoBlock title="自定义">
        <NoticeBar
          style={{
            backgroundColor: '#00bc8d',
            color: '#fff',
          }}
          delay={100}
          icon={<Icon type="uc-icon-tips" />}
          content={text}
        />

        <NoticeBar
          speed={100}
          closeable
          style={{ backgroundColor: '#eee', color: '#333', marginTop: 20 }}
          content={text}
        />
      </DemoBlock>
    </PageWrap>
  );
}
