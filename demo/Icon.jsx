import React from 'react';
import { IconTick, Cell, IconCross } from '../src';

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
    </div>
  );
}
