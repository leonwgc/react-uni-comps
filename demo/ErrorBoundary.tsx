import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ErrorBoundary, Toast } from 'react-uni-comps';

const ErrorApp = () => {
  throw new Error('Error App crashed');
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
        <div style={{ marginTop: 10 }}>这里不受影响</div>
      </DemoBlock>
    </PageWrap>
  );
}
