import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { useTimeout, Toast, useInterval } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="登录"></DemoBlock>
    </PageWrap>
  );
}
