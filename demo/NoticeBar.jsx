import React from 'react';
import { NoticeBar, Icon } from '../src';

export default function App() {
  return (
    <div className="app">
      <NoticeBar closeable content="各位请注意，当前文本超出了屏幕宽度" />
      <NoticeBar
        speed={100}
        closeable
        style={{ backgroundColor: '#eee', color: '#333', marginTop: 30 }}
        content="各位请注意，当前文本超出了屏幕宽度，组件会自动开启滚动功能，前后停留时间和滚动速度可以自定义设置"
      />

      <NoticeBar
        style={{
          backgroundColor: '#ff3b30',
          color: '#fff',
          marginTop: 30,
          height: 50,
        }}
        closeable
        content="各位请注意，当前文本超出了屏幕宽度，组件会自动开启滚动功能，前后停留时间和滚动速度可以自定义设置，更多用法请参见使用文档"
      />

      <NoticeBar
        style={{
          backgroundColor: '#00bc8d',
          color: '#fff',
          marginTop: 30,
          height: 50,
        }}
        delay={100}
        extra={
          <div>
            <Icon type="icon-zujian" /> extra
          </div>
        }
        icon={<Icon type="icon-tips" />}
        content="各位请注意，当前文本超出了屏幕宽度，组件会自动开启滚动功能，前后停留时间和滚动速度可以自定义设置，更多用法请参见使用文档"
      />
    </div>
  );
}
