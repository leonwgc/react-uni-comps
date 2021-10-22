import React, { useState } from 'react';
import { Toast, Cell, Button, DatePicker } from '../src';
import dayjs from '../src/dayjs';
import styled from '../src/styled';
import { CalendarOutlined } from '@ant-design/icons';

const dateFormat = 'YYYY-MM-DD';

const formatDate = (v, dateFormat) => {
  if (Array.isArray(v)) {
    if (v.length === 2) {
      return dayjs(v[0]).format(dateFormat) + '~' + dayjs(v[1]).format(dateFormat);
    }
  } else {
    return v && dayjs(v).format(dateFormat);
  }
};

export default function App() {
  const [val, setVal] = useState(new Date());

  const [val1, setVal1] = useState(new Date());

  return (
    <div style={{ margin: 20 }}>
      <Cell title="生日">
        <DatePicker
          value={val}
          onChange={setVal}
          onOk={(v) =>
            Toast.show({
              content: <span>{formatDate(v, dateFormat)}</span>,
            })
          }
          suffix={<CalendarOutlined />}
          selectRange
          format={dateFormat}
        />
      </Cell>
      <Button onClick={() => setVal(new Date(2023, 2, 24))}>set Date</Button>
      <DatePicker
        suffix={<CalendarOutlined />}
        value={val1}
        onChange={setVal1}
        format="YYYY/MM/DD"
      />
    </div>
  );
}
