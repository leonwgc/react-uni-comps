import React, { useState } from 'react';
import { Spinner, Space, Popup, HairLineBox, Tabs, Button } from 'react-uni-comps';
import './Popup.less';

export default function App() {
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [l, setL] = useState(false);
  const [t, setT] = useState(false);

  return (
    <div className="app">
      <Space wrap>
        <Button onClick={() => setB(true)}>show bottom</Button>
        <Spinner></Spinner>
        <Spinner size={32}></Spinner>
        <Spinner color="red"></Spinner>
        <Spinner color="red" size={48}></Spinner>
        <Spinner color="#004bcc"></Spinner>
        <Spinner color="#004bcc" size={48}></Spinner>
        <Button onClick={() => setC(true)}>show center</Button>
        <Button onClick={() => setL(true)}>show left</Button>
        <Button onClick={() => setT(true)}>show top</Button>
      </Space>

      <HairLineBox style={{ marginTop: 8, padding: '16px 32px' }}>
        <input
          placeholder="请输入姓名"
          style={{
            border: 'none',
            outline: 'none',
            display: 'block',
            WebkitAppearance: 'none',
            width: '100%',
            height: '1.41176471em',
            lineHeight: 1.41176471,
            fontSize: 'inherit',
            backgroundColor: 'transparent',
          }}
        ></input>
      </HairLineBox>

      <div style={{ width: 500 }}>
        <Tabs lineWidth={'50px'}>
          <Tabs.Tab title="title1">content1</Tabs.Tab>
          <Tabs.Tab title="title2">content2</Tabs.Tab>
          <Tabs.Tab title="title3">
            <Space wrap>
              <Button onClick={() => setB(true)}>show bottom</Button>
              <Spinner></Spinner>
              <Spinner size={32}></Spinner>
              <Spinner color="red"></Spinner>
              <Spinner color="red" size={48}></Spinner>
              <Spinner color="#004bcc"></Spinner>
              <Spinner color="#004bcc" size={48}></Spinner>
              <Button onClick={() => setC(true)}>show center</Button>
              <Button onClick={() => setL(true)}>show left</Button>
              <Button onClick={() => setT(true)}>show top</Button>
            </Space>
          </Tabs.Tab>
          <Tabs.Tab title={<Spinner></Spinner>}>content4</Tabs.Tab>
          <Tabs.Tab title="title5">content5</Tabs.Tab>
          <Tabs.Tab title="title6">content4</Tabs.Tab>
          <Tabs.Tab title="title7">content5</Tabs.Tab>
        </Tabs>
      </div>

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
