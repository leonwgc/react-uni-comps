import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ErrorBoundary, Button } from 'react-uni-comps';

const ErrorApp = () => {
  const [dead, setDead] = useState(false);

  if (dead) {
    throw Error('挂了吧~~');
  }
  return (
    <Button
      as="div"
      outlined
      block
      onClick={() => {
        setDead(true);
      }}
    >
      点击就挂
    </Button>
  );
};

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="错误边界区">
        <ErrorBoundary
          onError={(error, info) => {
            console.log(error.message);
          }}
          fallback={<div> 挂了吧 </div>}
        >
          <ErrorApp />
        </ErrorBoundary>
      </DemoBlock>

      <DemoBlock title="非错误边界区">
        <Button block>这里不受影响</Button>
      </DemoBlock>
    </PageWrap>
  );
}
