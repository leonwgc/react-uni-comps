import React, { useState } from 'react';
import { Toast, Button, Picker } from '../src';

const oneColData = [
  {
    label: '上海',
    value: '上海',
  },
  {
    label: '北京',
    value: '北京',
  },
];

const twoColsData = [
  {
    label: '上海',
    value: '上海',
    children: [
      {
        label: '闵行',
        value: '闵行',
      },
      {
        label: '浦东',
        value: '浦东',
      },
    ],
  },
  {
    label: '北京',
    value: '北京',
    children: [
      {
        label: '北京1',
        value: '北京1',
      },
      {
        label: '北京2',
        value: '北京2',
      },
    ],
  },
];

const areas = [
  {
    label: '上海',
    value: '上海',
    children: [
      {
        label: '闵行',
        value: '闵行',
        children: [
          {
            label: '莘庄',
            value: '莘庄',
          },
          {
            label: '颛桥',
            value: '颛桥',
          },
        ],
      },
      {
        label: '浦东',
        value: '浦东',
        children: [
          {
            label: '浦东1',
            value: '浦东1',
          },
          {
            label: '浦东2',
            value: '浦东2',
          },
        ],
      },
    ],
  },
  {
    label: '北京',
    value: '北京',
    children: [
      {
        label: '北京1',
        value: '北京1',
        children: [
          {
            label: '北京11',
            value: '北京11',
          },
          {
            label: '北京12',
            value: '北京12',
          },
        ],
      },
      {
        label: '北京2',
        value: '北京2',
        children: [
          {
            label: '北京21',
            value: '北京21',
          },
          {
            label: '北京22',
            value: '北京22',
          },
        ],
      },
    ],
  },
];

//#endregion

export default function App() {
  const [value, setValue] = useState(['北京']);
  const [value1, setValue1] = useState(['北京', '北京2']);
  const [value2, setValue2] = useState(['北京', '北京1', '北京12']);
  const [visible, setVisible] = useState(false);

  return (
    <div className="app" style={{ margin: '20px' }}>
      <Button block onClick={() => setVisible(1)}>
        show
      </Button>
      <Button
        style={{ margin: '20px 0' }}
        block
        onClick={() => {
          setVisible(2);
        }}
      >
        show 2 col
      </Button>
      <Button
        block
        onClick={() => {
          setVisible(3);
        }}
      >
        show 3 cols
      </Button>
      <Picker
        visible={visible === 1}
        onClose={() => setVisible(false)}
        onOk={(v) => {
          setValue(v);
          Toast.show({ content: JSON.stringify(v), duration: 1000 });
        }}
        value={value}
        cols={1}
        data={oneColData}
      />
      <Picker
        visible={visible === 2}
        onClose={() => setVisible(false)}
        value={value1}
        onOk={(v) => {
          setValue1(v);
          Toast.show({ content: JSON.stringify(v), duration: 1000 });
        }}
        cols={2}
        data={twoColsData}
      />
      <Picker
        visible={visible === 3}
        onClose={() => setVisible(false)}
        value={value2}
        onOk={(v) => {
          setValue2(v);
          Toast.show({ content: JSON.stringify(v), duration: 1000 });
        }}
        cols={3}
        data={areas}
      />
    </div>
  );
}
