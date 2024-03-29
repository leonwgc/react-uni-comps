import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Popover, Button, Avatar, AutoCenter, useForceUpdate, Space } from 'react-uni-comps';

const placements = [
  'top',
  'top-left',
  'top-right',
  'left',
  'left-top',
  'left-bottom',
  'bottom',
  'bottom-left',
  'bottom-right',
  'right',
  'right-top',
  'right-bottom',
];

export default function App() {
  const [visible, setVisible] = useState(true);

  const ref = useRef(0);
  const elRef = useRef();

  const forceRender = useForceUpdate();

  return (
    <PageWrap>
      <DemoBlock title="普通" padding={40}>
        <AutoCenter>
          <Popover
            placement={placements[ref.current] as any}
            visible={visible}
            onClose={() => setVisible(false)}
            content={<div style={{ padding: 20 }}>{placements[ref.current]}</div>}
          >
            <Button
              type="primary"
              onClick={() => {
                if (!visible) {
                  setVisible(true);
                } else {
                  forceRender();
                }
                ref.current++;
                if (ref.current > 11) {
                  ref.current = 0;
                }
              }}
            >
              点我试试
            </Button>
          </Popover>
        </AutoCenter>
      </DemoBlock>

      <DemoBlock title="静态调用">
        <Space>
          <Button
            type="primary"
            onClick={() => {
              const p = placements[ref.current++] as any;

              Popover.show({
                anchor: elRef,
                content: p,
                placement: p,
              });

              if (ref.current > 11) {
                ref.current = 0;
              }
            }}
          >
            静态调用
          </Button>

          <Button
            onClick={() => {
              Popover.hide();
            }}
          >
            关闭
          </Button>
        </Space>

        <AutoCenter style={{ marginTop: 100 }}>
          <Avatar size={60} ref={elRef}>
            W
          </Avatar>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
