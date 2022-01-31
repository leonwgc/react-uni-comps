import React, { useState, useRef } from 'react';
import { Space, Popup, Button, AlertDialog, styled } from 'react-uni-comps';

const StyleedPopupBottom = styled(Popup)`
  height: 50vh;
  width: 100%;

  .content {
    display: flex;
    height: 100%;
    padding: 16px;
    background-color: #fff;
  }
`;

export default function App() {
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [l, setL] = useState(false);
  const [t, setT] = useState(false);

  const [x, setX] = useState(false);
  const ref = useRef();

  return (
    <div>
      <Space wrap style={{ margin: 50 }}>
        <Button onClick={() => setB(true)}>show bottom</Button>
        <Button onClick={() => setC(true)}>show center</Button>
        <Button onClick={() => setL(true)}>show left</Button>
        <Button onClick={() => setT(true)}>show top</Button>
      </Space>

      <StyleedPopupBottom position="bottom" visible={b} onClose={() => setB(false)}>
        <div className="content">
          <Button type="primary" onClick={() => setB(false)}>
            close
          </Button>
        </div>
      </StyleedPopupBottom>
      <Popup
        position="center"
        style={{ width: 300, height: 150, backgroundColor: '#fff' }}
        visible={c}
        onClose={() => setC(false)}
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
        style={{ width: '50vw', padding: 16, backgroundColor: '#fff' }}
        visible={l}
        onClose={() => setL(false)}
      >
        <div>
          <Button onClick={() => setL(false)}>click to close</Button>
        </div>
      </Popup>
      <Popup position="top" visible={t} onClose={() => setT(false)}>
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
      <div
        ref={ref}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 300,
          border: '1px solid #eee',
        }}
      ></div>
      <Popup
        position="left"
        mountContainer={() => ref.current}
        visible={x}
        onClose={() => setX(false)}
        style={{ backgroundColor: '#fff' }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            padding: '16px',
          }}
        >
          <Button type="primary" onClick={() => setX(false)}>
            close
          </Button>
        </div>
      </Popup>
      <Button onClick={() => setX((v) => !v)}>底部容器左侧滑出</Button>
    </div>
  );
}
