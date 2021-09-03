import React, { useState } from 'react';
import { Space, Popup, Button } from '../src';

export default function App() {
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [l, setL] = useState(false);
  const [t, setT] = useState(false);

  return (
    <div>
      <Space wrap style={{ margin: 50 }}>
        <Button onClick={() => setB(true)}>show bottom</Button>
        <Button onClick={() => setC(true)}>show center</Button>
        <Button onClick={() => setL(true)}>show left</Button>
        <Button onClick={() => setT(true)}>show top</Button>
      </Space>

      <Popup
        position="bottom"
        style={{
          height: '40vh',
          width: '100%',
        }}
        visible={b}
        onMaskClick={() => setB(false)}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            padding: '16px',
            backgroundColor: '#fff',
          }}
        >
          hello,world
        </div>
      </Popup>
      <Popup
        position="center"
        style={{ width: '70vw', height: '60vh', backgroundColor: '#fff' }}
        visible={c}
        onMaskClick={() => setC(false)}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            padding: '16px',
          }}
        >
          <Button onClick={() => setC(false)}>click to close</Button>
        </div>
      </Popup>
      <Popup
        position="left"
        style={{ width: '50vw', height: '100vh', backgroundColor: '#fff' }}
        visible={l}
        onMaskClick={() => setL(false)}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            padding: '16px',
          }}
        >
          <Button onClick={() => setL(false)}>click to close</Button>
        </div>
      </Popup>
      <Popup position="top" visible={t} onMaskClick={() => setT(false)}>
        <div
          style={{
            display: 'flex',
            margin: '16px',
            padding: 16,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}
        >
          hello, world
        </div>
      </Popup>
    </div>
  );
}
