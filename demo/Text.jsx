import React from 'react';
import { Text, Tooltip } from '../src';

const text =
  '规定了一个监听目标与边界盒交叉区域的比例值，可以是一个具体的数值或是一组0.0到1.0之间的数组。若指定值为0.0，则意味着监听元素即使与根有1像素交叉，此元素也会被视为可见.';

export default function App() {
  return (
    <div style={{ margin: '20px', width: 400 }}>
      <div>
        <Tooltip style={{ width: 320 }} title={text} arrow={false} placement="bottom-left">
          <Text style={{ width: 200 }}>
            <span style={{ color: 'red' }}>hello,world</span> <span>{text}</span>
          </Text>
        </Tooltip>
      </div>

      <div style={{ marginTop: 30 }}>
        <Tooltip
          arrow={false}
          placement="bottom-left"
          title={<div style={{ width: 240 }}>{text}</div>}
        >
          <Text lines={2} style={{ width: 200 }}>
            {text}
          </Text>
        </Tooltip>
      </div>
    </div>
  );
}
