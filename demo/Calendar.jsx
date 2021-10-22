import React, { useState } from 'react';
import Calendar from '../src/Calendar';
import styled from '../src/styled';
import { UserOutlined } from '@ant-design/icons';

export default function App() {
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState();
  return (
    <div>
      <Calendar
        onChange={(v) => {
          onChange1(v);
          console.log(v);
        }}
        value={value1}
        selectRange
      />
      <Calendar
        style={{ marginTop: 30, width: 400 }}
        onChange={(v) => {
          onChange1(v);
          console.log(v);
        }}
        value={value1}
      />
      <Calendar
        style={{ marginTop: 30 }}
        // showWeekNumbers
        onChange={(v) => {
          onChange(v);
          console.log(v);
        }}
        onClickMonth={(v) => {
          console.log(v);
        }}
        value={value}
        view="year"
      />
    </div>
  );
}
