import React, { useState } from 'react';
import { Toast, Button, Picker, Space, styled } from '../src';

//#region  data

const StyledPicker = styled(Picker)`
  .header {
    .cancel-text {
      color: red;
    }
    .title {
      color: green;
    }
    .ok-text {
      color: blue;
    }
  }
`;

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

// 非级联
const UnlinkedTwo = [
  [
    { value: '选项一', label: '选项一' },
    { value: '选项二', label: '选项二' },
  ],
  [
    { value: '选项A', label: '选项A' },
    { value: '选项B', label: '选项B' },
  ],
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
  const [value3, setValue3] = useState(['选项二', '选项B']);
  const [visible, setVisible] = useState(false);

  return (
    <Space size={16} direction="vertical" style={{ margin: 20 }}>
      <Button block onClick={() => setVisible(1)}>
        单个
      </Button>

      <Button
        block
        onClick={() => {
          setVisible(4);
        }}
      >
        非级联2列
      </Button>

      <Button
        block
        onClick={() => {
          setVisible(2);
        }}
      >
        级联2列
      </Button>
      <Button
        block
        onClick={() => {
          setVisible(3);
        }}
      >
        级联3列
      </Button>

      <StyledPicker
        visible={visible === 1}
        onClose={() => setVisible(false)}
        onOk={(v) => {
          setValue(v);
          Toast.show(v);
        }}
        title="城市选择"
        cancelText="不选了"
        okText="选好了"
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
          Toast.show(v);
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
          Toast.show(v);
        }}
        cols={3}
        data={areas}
      />

      <Picker
        visible={visible === 4}
        onClose={() => setVisible(false)}
        value={value3}
        onOk={(v) => {
          setValue3(v);
          Toast.show(v);
        }}
        cols={2}
        data={UnlinkedTwo}
      />
    </Space>
  );
}
