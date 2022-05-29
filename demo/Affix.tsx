import React, { useEffect, useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Affix, Button, BackTop } from 'react-uni-comps';

export default function App() {
  const ref = useRef();
  useEffect(() => {
    document.body.style.height = '200vh';

    return () => {
      document.body.style.height = 'auto';
    };
  }, []);
  return (
    <PageWrap>
      <DemoBlock title="监听window滚动" style={{ marginTop: 100 }}>
        <Affix
          offsetTop={60}
          zIndex={200}
          onChange={(a) => console.log(a ? 'affixed' : 'no affixed')}
        >
          <Button>距离窗口顶部60px固定</Button>
        </Affix>
      </DemoBlock>

      <DemoBlock title="监听div容器滚动">
        <div
          ref={ref}
          style={{
            height: 300,
            width: 300,
            border: '1px solid #eee',
            position: 'relative',
            overflowY: 'scroll',
          }}
        >
          <div style={{ height: '100vh' }}>
            <Button style={{ height: 100 }}>hello</Button>

            <Affix offsetTop={20} target={() => ref.current}>
              <Button>距离容器顶部20px固定</Button>
            </Affix>

            <BackTop visibilityHeight={30} target={ref}>
              <Button
                circle
                style={{
                  width: 60,
                  height: 60,
                  position: 'absolute',
                  bottom: 60,
                  right: 20,
                  fontSize: 20,
                  color: '#8c8c8c',
                  boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                Top
              </Button>
            </BackTop>
          </div>
        </div>
      </DemoBlock>
    </PageWrap>
  );
}
