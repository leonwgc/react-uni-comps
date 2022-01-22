import React, { useState, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { RollingNumber, AutoCenter } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <AutoCenter>
          <RollingNumber number={100}></RollingNumber>
        </AutoCenter>
      </DemoBlock>

      <DemoBlock title="样式">
        <AutoCenter>
          <RollingNumber
            number={3000}
            style={{ fontSize: 20, color: '#005cff', margin: '10px 16px' }}
          ></RollingNumber>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
