import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { IndexList, Toast, Drawer, Button, styled } from 'react-uni-comps';

const StyledDrawer = styled(Drawer)`
  .body {
    overflow-y: scroll;
  }
`;

const data: any = [
  {
    title: 'A',
    children: [
      { label: 'Apple', value: 'Apple' },
      { label: 'Ant', value: 'Ant' },
      { label: 'Altimeter', value: 'Altimeter' },
      { label: 'Apple1', value: 'Apple1' },
      { label: 'Ant1', value: 'Ant1' },
      { label: 'Altimeter1', value: 'Altimeter1' },
      { label: 'Apple2', value: 'Apple2' },
      { label: 'Ant2', value: 'Ant2' },
      { label: 'Altimeter2', value: 'Altimeter2' },
    ],
  },
  {
    title: 'B',
    children: [
      { label: 'Bpple', value: 'Bpple' },
      { label: 'Bnt', value: 'Ant' },
      { label: 'Bltimeter', value: 'Altimeter' },
      { label: 'Bpple1', value: 'Apple1' },
      { label: 'Bnt1', value: 'Ant1' },
      { label: 'Bltimeter1', value: 'Altimeter1' },
      { label: 'Bpple2', value: 'Apple2' },
      { label: 'Bnt2', value: 'Ant2' },
      { label: 'Bltimeter2', value: 'Altimeter2' },
    ],
  },
  {
    title: 'C',
    children: [
      { label: 'cpple', value: 'Bpple' },
      { label: 'cBnt', value: 'Ant' },
      { label: 'cBltimeter', value: 'Altimeter' },
      { label: 'cBpple1', value: 'Apple1' },
      { label: 'cBnt1', value: 'Ant1' },
      { label: 'cBltimeter1', value: 'Altimeter1' },
      { label: 'cBpple2', value: 'Apple2' },
      { label: 'cBnt2', value: 'Ant2' },
      { label: 'cBltimeter2', value: 'Altimeter2' },
    ],
  },
  {
    title: 'D',
    children: [
      { label: 'dBpple', value: 'Bpple' },
      { label: 'dBnt', value: 'Ant' },
      { label: 'dBdltimeter', value: 'Altimeter' },
      { label: 'dBpple1', value: 'Apple1' },
      { label: 'dBnt1', value: 'Ant1' },
      { label: 'dBltimeter1', value: 'Altimeter1' },
      { label: 'dBpple2', value: 'Apple2' },
      { label: 'dBnt2', value: 'Ant2' },
      { label: 'dBltimeter2', value: 'Altimeter2' },
    ],
  },
];

export default function App() {
  const [visible, setVisible] = useState(true);
  return (
    <PageWrap>
      <DemoBlock>
        <Button onClick={() => setVisible(true)}>show</Button>

        <StyledDrawer
          visible={visible}
          onClose={() => setVisible(false)}
          position="bottom"
          style={{ height: '70vh' }}
        >
          <IndexList
            data={data}
            onItemClick={(item) => Toast.show({ content: item.value, duration: 1000 })}
          />
        </StyledDrawer>
      </DemoBlock>
    </PageWrap>
  );
}
