import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ErrorBoundary, Toast, Button } from 'react-uni-comps';

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
      <DemoBlock>
        <ErrorBoundary
          onError={(error) => {
            Toast.show(error.message);
          }}
        >
          <ErrorApp />
        </ErrorBoundary>
        <Button block style={{ marginTop: 50, height: 60 }}>
          这里不受影响
        </Button>
      </DemoBlock>
    </PageWrap>
  );
}
