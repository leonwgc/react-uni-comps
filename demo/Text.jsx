import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Text, Tooltip, Divider } from 'react-uni-comps';

const text =
  '规定了一个监听目标与边界盒交叉区域的比例值，可以是一个具体的数值或是一组0.0到1.0之间的数组。若指定值为0.0，则意味着监听元素即使与根有1像素交叉，此元素也会被视为可见.';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="1行">
        <Text style={{ width: 200 }}>{text}</Text>

        <Text style={{ width: 200, marginTop: 16 }}>
          <span style={{ color: 'red' }}>插入其他内容</span> <span>{text}</span>
        </Text>
      </DemoBlock>

      <DemoBlock title="2行">
        <Text lines={2} style={{ width: 200 }}>
          {text}
        </Text>
      </DemoBlock>

      <DemoBlock title="3行">
        <Text lines={3} style={{ width: 200 }}>
          {text}
        </Text>
      </DemoBlock>
    </PageWrap>
  );
}
