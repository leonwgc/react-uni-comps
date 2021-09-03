import React, { useEffect, useRef } from 'react';
import { Affix, Button } from '../src';

export default function App() {
  const ref = useRef();
  useEffect(() => {
    document.body.style.height = '200vh';

    return () => (document.body.style.height = 'auto');
  }, []);
  return (
    <div style={{ margin: 100 }}>
      <Affix offsetTop={60} onChange={(a) => console.log(a ? 'affixed' : 'no affixed')}>
        <Button type="primary">hello,top 60</Button>
      </Affix>
      <Button danger block style={{ margin: '50px 0' }}>
        danger
      </Button>

      <Affix offsetTop={20} onChange={(a) => console.log(a ? 'affixed' : 'no affixed')}>
        <Button type="primary">hello, top 20</Button>
      </Affix>

      <div
        ref={ref}
        style={{
          marginTop: 100,
          height: 300,
          border: '1px solid #eee',
          position: 'relative',
          overflowY: 'scroll',
        }}
      >
        <div style={{ height: '100vh' }}>
          <Button type="primary" style={{ margin: '150px' }}>
            hello,there
          </Button>
          <Affix offsetTop={10} target={() => ref.current}>
            <Button type="primary">hello, top 10 inner</Button>
          </Affix>

          <div style={{ marginTop: '130px' }}>
            <Affix
              offsetBottom={20}
              target={() => ref.current}
              onChange={(a) => console.log(a ? 'affixed' : 'no affixed')}
            >
              <Button type="primary">hello, bottom 10 inner</Button>
            </Affix>
          </div>

          <Button type="primary" style={{ margin: '150px' }}>
            hello,ccc
          </Button>
        </div>
      </div>
    </div>
  );
}
