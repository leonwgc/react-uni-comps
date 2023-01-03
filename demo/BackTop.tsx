import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { BackTop, Icon, FloatingBubble } from 'react-uni-comps';

const App = () => {
  return (
    <PageWrap>
      <div style={{ height: '200vh', background: '#fff', padding: 20 }}>
        向下滚动100px显示回到顶部按钮
      </div>

      <BackTop>
        <FloatingBubble style={{ bottom: 45, right: 45, left: 'unset' }}>
          <Icon type="uc-icon-xiangxia" style={{ transform: 'rotate(-180deg)', fontSize: 24 }} />
        </FloatingBubble>
      </BackTop>
    </PageWrap>
  );
};

export default App;
