import React from 'react';
import PageWrap from './common/PageWrap';
import { FloatingBubble, Icon } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <FloatingBubble
        style={{ right: 30, bottom: 60, background: '#005cff', color: '#fff', fontSize: 22 }}
        onPress={() => {
          console.log('start');
        }}
        onRelease={() => console.log('end')}
      >
        <Icon type="uc-icon-jia2" />
      </FloatingBubble>
    </PageWrap>
  );
}
