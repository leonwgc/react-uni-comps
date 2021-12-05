import React, { useState } from 'react';
import { Cell, Switch, Toast, Calendar } from 'react-uni-comps';
import dayjs from 'dayjs';

export default function App() {
  const [range, setRange] = useState(false);
  const [value, setValue] = useState('2021-12-20');
  const [custom, setCustom] = useState(false);
  const [minMax, setMinMax] = useState(true);
  const [isZh, setIsZh] = useState(true);

  const minMaxValue = minMax ? { min: '2021-10-29', max: '2022-1-04' } : null;

  return (
    <div>
      <Cell
        title="时间段选择"
        content={<Switch checked={range} onChange={setRange}></Switch>}
      ></Cell>
      <Cell
        title="自定义渲染"
        description="周末/周二 disable"
        content={<Switch checked={custom} onChange={setCustom}></Switch>}
      ></Cell>
      <Cell
        title="最大最小时间"
        description="2021-10-29 ~ 2022-1-04"
        content={<Switch checked={minMax} onChange={setMinMax}></Switch>}
      ></Cell>
      <Cell title="中英切换" content={<Switch checked={isZh} onChange={setIsZh}></Switch>}></Cell>
      <Calendar
        style={{ position: 'fixed', bottom: 0, width: '100vw' }}
        range={range}
        value={value}
        locale={isZh ? 'zh' : 'en'}
        {...minMaxValue}
        dateRender={(date) => {
          if (custom && /(0)/.test(date.getDay())) {
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
                    whiteSpace: 'nowrap',
                  }}
                >
                  打烊
                </div>
              </div>
            );
          }
          return date.getDate();
        }}
        disabledDate={(date) => {
          // disable 周二
          if (custom) return /(2|0)/.test(date.getDay());
          return false;
        }}
        onChange={(value) => {
          setValue(value);

          Toast.show(
            range
              ? value.map((v) => dayjs(v).format('YYYY-MM-DD')).join('~')
              : dayjs(value).format('YYYY-MM-DD')
          );
        }}
      />
    </div>
  );
}
