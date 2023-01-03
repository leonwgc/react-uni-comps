import React from 'react';
import PageWrap from './common/PageWrap';
import { BackTop, Icon, FloatingBubble } from 'react-uni-comps';

const App = () => {
  return (
    <PageWrap>
      <div style={{ height: '200vh', background: '#fff', padding: 20 }}>
        向下滚动100px显示回到顶部按钮
      </div>

      <BackTop>
        <FloatingBubble
          style={{ bottom: 45, right: 45, background: '#005cff', color: '#fff', fontSize: 18 }}
        >
          <Icon type="uc-icon-xiangxia" style={{ transform: 'rotate(-180deg)' }} />
        </FloatingBubble>
      </BackTop>
    </PageWrap>
  );
};

export default App;
