import React, { useEffect } from 'react';
import { Affix, Button } from '../src';

export default function App() {
  useEffect(() => {
    document.body.style.height = '200vh';

    return () => (document.body.style.height = 'auto');
  }, []);
  return (
    <div style={{ margin: 100 }}>
      <Affix offsetTop={50}>
        <Button type="primary">hello</Button>
      </Affix>
      <Button block type="primary" style={{ marginTop: 50 }}>
        wgc
      </Button>
    </div>
  );
}
