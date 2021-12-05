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

  const [a, setA] = useState(false);
  const [il, setIl] = useState(false);
  const bRef = useRef();

  return (
    <div>
      <Space wrap style={{ margin: 50 }}>
        <Button onClick={() => setB(true)}>show bottom</Button>
        <Button onClick={() => setC(true)}>show center</Button>
        <Button onClick={() => setL(true)}>show left</Button>
        <Button onClick={() => setT(true)}>show top</Button>
      </Space>

      <StyleedPopupBottom position="bottom" visible={b} onClose={() => setB(false)}>
        <div className="content" ref={bRef}>
          <Button type="primary" onClick={() => setA(true)}>
            open alert
          </Button>
          <Button type="primary" onClick={() => setIl(true)}>
            open left
          </Button>
          <AlertDialog
            visible={a}
            onClose={() => setA(false)}
            content={<span>hello</span>}
          ></AlertDialog>
          <Popup
            position="left"
            className="bref"
            mountContainer={() => bRef.current}
            style={{ height: '100%', background: '#ccc' }}
            visible={il}
            mask={false}
          >
            <div
              style={{
                display: 'flex',
                height: '100%',
                padding: '16px',
              }}
            >
              <Button type="primary" onClick={() => setIl(false)}>
                close
              </Button>
            </div>
          </Popup>
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
    </div>
  );
}
