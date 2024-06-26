import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import {
  Popover,
  Button,
  Avatar,
  AutoCenter,
  useForceUpdate,
  Space,
  styled,
} from 'react-uni-comps';

const StyledContent = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
            style={{ background: '#000', color: '#fff', padding: 0 }}
            placement={placements[ref.current] as any}
            visible={visible}
            onClose={() => setVisible(false)}
            content={<StyledContent>{placements[ref.current]}</StyledContent>}
          >
            <Button
              type="primary"
              style={{ height: 80, width: 160 }}
              onClick={() => {
                setVisible(true);
                ref.current++;
                if (ref.current > 11) {
                  ref.current = 0;
                }
                forceRender();
              }}
            >
              点我试试
            </Button>
          </Popover>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
