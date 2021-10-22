import React, { useState } from 'react';
import DatePicker from '../src/DatePicker';
import { Toast, Cell } from '../src';
import styled from '../src/styled';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

const StyledDatePick = styled(DatePicker)`
  &.pc {
    width: 200px;
    height: 45px;
  }
`;

export default function App() {
  const [visible, setVisible] = useState(true);
  const [val, setVal] = useState(new Date());

  return (
    <div style={{ margin: 20 }}>
      <Cell title="生日">
        <StyledDatePick
          style={{ marginLeft: 50 }}
          value={val}
          onChange={setVal}
          visible={visible}
          onOk={(v) => Toast.show({ content: v.toLocaleDateString() })}
          onClose={() => setVisible(false)}
          suffix={<CalendarOutlined />}
        />
      </Cell>
    </div>
  );
}
