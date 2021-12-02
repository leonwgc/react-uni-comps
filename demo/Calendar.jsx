import React, { useState } from 'react';
import { Badge, Cell, Switch } from '../src';
import Calendar from '../src/calendar/Calendar';

export default function App() {
  const [range, setRange] = useState(true);
  const [value, setValue] = useState('2021-11-30');
  // const [value, setValue] = useState(['2020-07-29', '2020-08-04']);
  const [min, setMin] = useState('2021-10-29');
  const [max, setMax] = useState('2022-1-04');
  const [custom, setCustom] = useState(true);

  return (
    <div>
      <Cell
        title="时间段选择"
        content={<Switch checked={range} onChange={setRange}></Switch>}
      ></Cell>
      <Calendar
        range={range}
        value={value}
        min={min}
        locale="zh"
        max={max}
        dateRender={(date) => {
          if (custom && /(0|6)/.test(date.getDay())) {
            return (
              <div style={{ position: 'relative' }}>
                <div>{date.getDate()}</div>
                <div
                  style={{
                    fontSize: 12,
                    position: 'absolute',
                    bottom: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <Badge />
                </div>
              </div>
            );
          }
          return date.getDate();
        }}
        // disabledDate={(date) => {
        //   if (custom) return /(0|6)/.test(date.getDay());
        //   return false;
        // }}
        onChange={(value) => {
          setValue(value);
          console.log('onChange', value);
        }}
      />
    </div>
  );
}
