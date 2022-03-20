import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Popover, Button, Avatar, AutoCenter, useForceUpdate } from 'react-uni-comps';

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
  const [visible, setVisible] = useState(false);

  const ref = useRef(0);
  const elRef = useRef();

  const forceRender = useForceUpdate();

  return (
    <PageWrap>
      <DemoBlock title="气泡式卡片浮层" padding={40}>
        <AutoCenter>
          <Popover
            placement={placements[ref.current] as any}
            visible={visible}
            onClose={() => setVisible(false)}
            content={<div style={{ padding: 20 }}>{placements[ref.current]}</div>}
          >
            <Button
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

      <DemoBlock title="静态方法">
        <Button
          type="primary"
          onClick={() => {
            const p = placements[ref.current++] as any;

            Popover.show({
              anchor: elRef,
              content: p,
              placement: p,
              closable: true,
            });

            if (ref.current > 11) {
              ref.current = 0;
            }
          }}
        >
          静态调用（点我试试）
        </Button>

        <AutoCenter>
          <Avatar size={80} ref={elRef} onClick={() => console.log('hi')}>
            锚
          </Avatar>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
