import React, { useState } from 'react';
import Calendar from '../src/calendar/Calendar';

export default function App() {
  const [multiple, setMultiple] = useState(true);
  const [value, setValue] = useState(['2020-07-29', '2020-08-04']);
  const [min, setMin] = useState('2017-12-29');
  const [max, setMax] = useState('2020-08-04');
  const [custom, setCustom] = useState(false);

  return (
    <Calendar
      multiple={multiple}
      value={value}
      min={min}
      locale="zh"
      max={max}
      prefixCls="uc-calendar"
      dateRender={(date) => {
        if (custom && /(0|6)/.test(date.getDay())) {
          return (
            <div className="custom">
              <div className="custom__date">{date.getDate()}</div>
              <div className="custom__text">Closed</div>
            </div>
          );
        }
        return date.getDate();
      }}
      disabledDate={(date) => {
        if (custom) return /(0|6)/.test(date.getDay());
        return false;
      }}
      onChange={(value) => {
        setValue(value);
        console.log('onChange', value);
      }}
    />
  );
}
