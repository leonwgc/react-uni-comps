import React from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { FingerGestureElement, Toast } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <Block title="基础分割线">
        <FingerGestureElement
          onDoubleTap={() => {
            Toast.show('doubleTap');
          }}
          onLongTap={() => {
            Toast.show('longTap');
          }}
          onTouchStart={() => {
            console.log('start');
          }}
          onTouchEnd={(e) => {
            console.log('end');
          }}
          onSwipe={(e) => {
            console.log('swipe', e.direction);
          }}
          onPressMove={(e) => {
            console.log(e.deltaX, e.deltaY);
          }}
        >
          <div style={{ width: 100, height: 100, border: '1px solid red', position: 'relative' }} />
        </FingerGestureElement>
      </Block>
    </PageWrap>
  );
}
