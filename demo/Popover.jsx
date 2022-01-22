import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Popover, Button } from 'react-uni-comps';

const placements = [
  'top',
  'left',
  'bottom',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'left-top',
  'left-bottom',
  'right-top',
  'right-bottom',
];

export default function App() {
  const [visible, setVisible] = useState(false);
  const indexRef = useRef(0);

  return (
    <PageWrap>
      <DemoBlock title="气泡式卡片浮层">
        <Popover
          placement={placements[indexRef.current]}
          visible={visible}
          onClose={() => setVisible(false)}
          content={<div style={{ padding: 16 }}>I'm here</div>}
          onVisibleChange={(v) => {
            if (v) {
              indexRef.current++;
              if (indexRef.current > placements.length - 1) {
                indexRef.current = 0;
              }
            }
          }}
        >
          <Button
            style={{ margin: '10px 0px 10px 100px' }}
            onMouseOut={() => setVisible(false)}
            onMouseOver={() => setVisible(true)}
          >
            hi, there
          </Button>
        </Popover>
      </DemoBlock>
    </PageWrap>
  );
}
