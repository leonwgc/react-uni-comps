import React from 'react';
import { IconTick, Cell, IconCross, IconArrow, Space } from '../src';

export default function App() {
  return (
    <div>
      <Cell label="IconTick"></Cell>
      <IconTick></IconTick>
      <IconTick size={40}></IconTick>
      <IconTick size={40} color="#004bcc"></IconTick>
      <IconTick size={60} color="#00bc8d"></IconTick>
      <Cell label="IconCross"></Cell>
      <IconCross></IconCross>
      <IconCross size={40}></IconCross>
      <IconCross size={40} color="#004bcc"></IconCross>
      <IconCross size={60} color="#00bc8d"></IconCross>
      <Cell label="IconArrow-right"></Cell>
      <IconArrow direction="right"></IconArrow>
      <IconArrow size={40} direction="right"></IconArrow>
      <IconArrow size={40} color="#004bcc" direction="right"></IconArrow>
      <IconArrow size={60} color="#00bc8d" direction="right"></IconArrow>
      <Cell label="IconArrow-top"></Cell>
      <IconArrow direction="top"></IconArrow>
      <IconArrow size={40} direction="top"></IconArrow>
      <IconArrow size={40} color="#004bcc" direction="top"></IconArrow>
      <IconArrow size={60} color="#00bc8d" direction="top"></IconArrow>
      <Cell label="IconArrow-left"></Cell>
      <IconArrow direction="left"></IconArrow>
      <IconArrow size={40} direction="left"></IconArrow>
      <IconArrow size={40} color="#004bcc" direction="left"></IconArrow>
      <IconArrow size={60} color="#00bc8d" direction="left"></IconArrow>
      <Cell label="IconArrow-bottom"></Cell>
      <IconArrow direction="bottom"></IconArrow>
      <IconArrow size={40} direction="bottom"></IconArrow>
      <IconArrow size={40} color="#004bcc" direction="bottom"></IconArrow>
      <IconArrow size={60} color="#00bc8d" direction="bottom"></IconArrow>

      <div style={{ color: 'red' }}>
        <Space>
          <IconArrow size={24} /> <IconCross size={24} /> <IconTick size={24} />
        </Space>
      </div>
    </div>
  );
}
