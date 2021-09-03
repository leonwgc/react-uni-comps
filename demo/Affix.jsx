import React, { useEffect, useRef } from 'react';
import { Affix, Button } from '../src';

export default function App() {
  useEffect(() => {
    document.body.style.height = '200vh';

    return () => (document.body.style.height = 'auto');
  }, []);
  return (
    <div style={{ margin: 100 }}>
      {/* <Affix offsetTop={60} onChange={(a) => console.log(a ? 'affixed' : 'no affixed')}>
        <Button type="primary">hello,top</Button>
      </Affix>
      <Button block type="primary" style={{ margin: '50px 30px' }}>
        wgc
      </Button> */}

      <Affix onChange={(a) => console.log(a ? 'affixed' : 'no affixed')}>
        <Button type="primary">hello,0</Button>
      </Affix>
    </div>
  );
}
