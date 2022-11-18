import React from 'react';
import PageWrap from './common/PageWrap';
import { FloatingBubble, Icon } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <FloatingBubble style={{ fontSize: 20 }} onRelease={() => console.log('released')}>
        <Icon type="uc-icon-jia2" />
      </FloatingBubble>
    </PageWrap>
  );
}
