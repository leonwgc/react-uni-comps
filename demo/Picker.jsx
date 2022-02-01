import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Toast, Button, Picker, Space, styled } from 'react-uni-comps';

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

var city = {
  11: '北京',
  12: '天津',
  13: '河北',
  14: '山西',
  15: '内蒙古',
  21: '辽宁',
  22: '吉林',
  23: '黑龙江',
  31: '上海',
  32: '江苏',
  33: '浙江',
  34: '安徽',
  35: '福建',
  36: '江西',
  37: '山东',
  41: '河南',
  42: '湖北',
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
  const [value, setValue] = useState(['湖北']);
  const [value1, setValue1] = useState(['北京', '北京2']);
  const [value2, setValue2] = useState(['北京', '北京1', '北京12']);
  const [value3, setValue3] = useState(['选项二', '选项B']);
  const [visible, setVisible] = useState(false);

  return (
    <PageWrap>
      <DemoBlock title="示例">
        <Space wrap>
          <Button active onClick={() => setVisible(1)}>
            单个
          </Button>

          <Button
            active
            onClick={() => {
              setVisible(2);
            }}
          >
            级联2列
          </Button>
          <Button
            active
            onClick={() => {
              setVisible(3);
            }}
          >
            级联3列
          </Button>

          <Button
            active
            onClick={() => {
              setVisible(4);
            }}
          >
            非级联2列
          </Button>

          <StyledPicker
            itemHeight={50}
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
      </DemoBlock>
    </PageWrap>
  );
}
