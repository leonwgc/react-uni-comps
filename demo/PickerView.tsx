import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import areas from './area';
import { PickerView, Button, Affix } from 'react-uni-comps';

type StringOrNumber = string | number;

//#region  data

var city = {
  11: '北京',
  12: '天津',
  13: '河北',
  14: '山西',
  15: '内蒙古',
  21: '辽宁',
  22: '吉林',
  23: '黑龙江 ',
  31: '上海',
  32: '江苏',
  33: '浙江',
  34: '安徽',
  35: '福建',
  36: '江西',
  37: '山东',
  41: '河南',
  42: '湖北 ',
  43: '湖南',
  44: '广东',
  45: '广西',
  46: '海南',
  50: '重庆',
  51: '四川',
  52: '贵州',
  53: '云南',
  54: '西藏 ',
  61: '陕西',
  62: '甘肃',
  63: '青海',
  64: '宁夏',
  65: '新疆',
  71: '台湾',
  81: '香港',
  82: '澳门',
  91: '国外 ',
};

const simpleOneColData = ['北京', '天津', '湖北', '山西'];
const oneColData = Object.values(city).map((v) => ({ label: v.trim(), value: v.trim() }));

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

const UnlinkedThree = [
  [
    { value: '选项一', label: '选项一' },
    { value: '选项二', label: '选项二' },
  ],
  [
    { value: '选项A', label: '选项A' },
    { value: '选项B', label: '选项B' },
  ],
  [
    { value: '111', label: '111' },
    { value: '222', label: '222' },
  ],
];

const UnlinkedFour = [
  [
    { value: '选项一', label: '选项一' },
    { value: '选项二', label: '选项二' },
  ],
  [
    { value: '选项A', label: '选项A' },
    { value: '选项B', label: '选项B' },
  ],
  [
    { value: '111', label: '111' },
    { value: '222', label: '222' },
  ],
  [
    { value: 'xxxx', label: 'xxxx' },
    { value: 'yyyy', label: 'yyyy' },
  ],
];

//#endregion

export default function App() {
  const [value, setValue] = useState<Array<StringOrNumber>>(['湖北']);
  const [value1, setValue1] = useState<Array<StringOrNumber>>(['北京', '北京2']);
  const [value2, setValue2] = useState<Array<StringOrNumber>>(['北京', '北京1', '北京12']);
  const [value3, setValue3] = useState<Array<StringOrNumber>>(['选项二', '选项B']);

  const [data, setData] = useState([]);
  const [v, setV] = useState<Array<StringOrNumber>>();

  return (
    <PageWrap>
      <Affix>
        <DemoBlock title="当前值：" style={{ background: '#fff' }}>
          {v}
        </DemoBlock>
      </Affix>

      <DemoBlock title="一列 字符串数组">
        <PickerView
          onChange={(v) => {
            setValue(v);
            setV(v);
          }}
          value={value}
          data={simpleOneColData}
        />
      </DemoBlock>

      <DemoBlock title="省市区">
        <PickerView
          onChange={(v) => {
            setValue2(v);
            setV(v);
          }}
          labelRender={(item) =>
            (item.label as string).length > 6
              ? (item.label as string).slice(0, 6) + '..'
              : item.label
          }
          value={value2}
          data={areas}
        />
      </DemoBlock>

      <DemoBlock title="一列 label，value对象数组">
        <PickerView
          onChange={(v) => {
            setValue(v);
            setV(v);
          }}
          value={value}
          data={oneColData}
        />
      </DemoBlock>

      <DemoBlock title="联动二列">
        <PickerView
          onChange={(v) => {
            setValue1(v);
            setV(v);
          }}
          value={value1}
          data={twoColsData}
        />
      </DemoBlock>

      <DemoBlock title="联动二列，动态设置数据源">
        <PickerView
          value={value1}
          onChange={(v) => {
            setValue1(v);
            setV(v);
          }}
          data={data}
        />
        <Button onClick={() => setData(twoColsData)}>设置数据</Button>
      </DemoBlock>

      <DemoBlock title="非联动二列">
        <PickerView
          value={value3}
          onChange={(v) => {
            setValue3(v);
            setV(v);
          }}
          data={UnlinkedTwo}
        />
      </DemoBlock>

      <DemoBlock title="非联动三列">
        <PickerView
          onChange={(v) => {
            setV(v);
          }}
          data={UnlinkedThree}
        />
      </DemoBlock>

      <DemoBlock title="非联动四列">
        <PickerView
          onChange={(v) => {
            setV(v);
          }}
          data={UnlinkedFour}
        />
      </DemoBlock>
    </PageWrap>
  );
}
