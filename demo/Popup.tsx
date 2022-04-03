import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Space, Popup, Button, styled } from 'react-uni-comps';

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
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  const [x, setX] = useState(false);
  const ref = useRef();

  return (
    <PageWrap>
      <DemoBlock>
        <Space direction="vertical" size={24}>
          <Button onClick={() => setVisible1(true)}>底部弹出</Button>
          <Button onClick={() => setVisible2(true)}>左侧弹出</Button>
          <Button onClick={() => setVisible3(true)}>右侧弹出</Button>
          <Button onClick={() => setVisible4(true)}>上边弹出</Button>
          <Button onClick={() => setVisible5(true)}>中间弹出</Button>
          <Button onClick={() => setX((v) => !v)}>底部容器左侧滑出</Button>
        </Space>
      </DemoBlock>

      <StyleedPopupBottom position="bottom" visible={visible1} onClose={() => setVisible1(false)}>
        <div className="content">
          <Button type="primary" onClick={() => setVisible1(false)}>
            close
          </Button>
        </div>
      </StyleedPopupBottom>

      <Popup
        position="left"
        style={{ width: 200, padding: 16 }}
        visible={visible2}
        onClose={() => setVisible2(false)}
      >
        left
      </Popup>

      <Popup
        position="right"
        style={{ width: 200, padding: 16 }}
        visible={visible3}
        onClose={() => setVisible3(false)}
      >
        right
      </Popup>

      <Popup
        position="top"
        style={{ height: 90, padding: 16 }}
        visible={visible4}
        onClose={() => setVisible4(false)}
      >
        top
      </Popup>

      <Popup
        position="center"
        style={{ width: 300, height: 150 }}
        visible={visible5}
        onClose={() => setVisible5(false)}
      >
        center
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
        mountContainer={ref}
        visible={x}
        onClose={() => setX(false)}
        style={{}}
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
    </PageWrap>
  );
}
