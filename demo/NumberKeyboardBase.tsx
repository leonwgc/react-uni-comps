import React from 'react';
import PageWrap from './common/PageWrap';
import { Toast, NumberKeyboardBase } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <NumberKeyboardBase
        style={{ position: 'absolute', bottom: 0 }}
        okText="Ok"
        onClick={(key) => {
          Toast.show(key);
        }}
      />
    </PageWrap>
  );
}
