import React, { useState } from 'react';
import DatePicker from '../src/DatePicker';
import { Toast, Cell, Button } from '../src';
import styled from '../src/styled';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

const StyledDatePick = styled(DatePicker)`
  &.pc {
    width: 200px;
    height: 45px;
  }
`;

export default function App() {
  const [val, setVal] = useState(new Date());

  return (
    <div style={{ margin: 20 }}>
      <Cell title="生日">
        <DatePicker
          style={{ marginLeft: 50 }}
          value={val}
          onChange={setVal}
          onOk={(v) => Toast.show({ content: v.toLocaleDateString() })}
          suffix={<CalendarOutlined />}
          prev2Label={null}
          next2Label={null}
        />
      </Cell>
      <Button onClick={() => setVal(new Date(2023, 2, 24))}>set Date</Button>
    </div>
  );
}
