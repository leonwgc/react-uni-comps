import React, { useState, useref, useRef } from 'react';
import { Divider, Popup, Toast, Button } from '../src';
import Picker from '../src/Picker';
import areas from './pickerData';

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
  },
];

//#endregion

export default function App() {
  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const [visible, setVisible] = useState(1);

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
        onChange={(v) => {
          setValue(v);
        }}
        onOk={(v) => {
          Toast.show(JSON.stringify(v), 1000);
        }}
        value={value}
        cols={1}
        data={oneColData}
      />
      <Picker
        visible={visible === 2}
        onClose={() => setVisible(false)}
        value={value1}
        onChange={(v) => {
          setValue1(v);
        }}
        onOk={(v) => {
          Toast.show(JSON.stringify(v), 1000);
        }}
        cols={2}
        data={twoColsData}
      />
      <Picker
        visible={visible === 3}
        onClose={() => setVisible(false)}
        onChange={(v) => {
          setValue2(v);
        }}
        value={value2}
        onOk={(v) => {
          Toast.show(JSON.stringify(v), 1000);
        }}
        cols={3}
        data={areas}
      />
    </div>
  );
}
