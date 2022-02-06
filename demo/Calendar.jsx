import React, { useState } from 'react';
import { Cell, Switch, Toast, Calendar } from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import dayjs from 'dayjs';

export default function App() {
  const [range, setRange] = useState(false);
  // const [value, setValue] = useState([
  // dayjs().format('yyyy-MM-dd'),
  // dayjs().add(10, 'day').format('yyyy-MM-dd'),
  // ]);
  const [value, setValue] = useState(new Date());
  const [custom, setCustom] = useState(false);
  const [minMax, setMinMax] = useState(false);
  const [isZh, setIsZh] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const minMaxValue = minMax ? { min: '2021-10-29', max: '2022-1-04' } : null;

  return (
    <PageWrap>
      <DemoBlock title="示例" padding={0}>
        <Cell
          title="禁用"
          content={<Switch checked={disabled} onChange={setDisabled}></Switch>}
          description="周二disabled"
        ></Cell>
        <Cell
          title="自定义渲染"
          content={<Switch checked={custom} onChange={setCustom}></Switch>}
          description="周末显示打烊"
        ></Cell>
        <Cell
          title="时间段选择"
          content={<Switch checked={range} onChange={setRange}></Switch>}
        ></Cell>
        <Cell
          title="最大最小时间"
          description="2021-10-29 ~ 2022-1-04"
          content={<Switch checked={minMax} onChange={setMinMax}></Switch>}
        ></Cell>
        <Cell
          title="中英切换"
          description={isZh ? '中文' : 'English'}
          content={<Switch checked={isZh} onChange={setIsZh}></Switch>}
        ></Cell>
      </DemoBlock>

      <Calendar
        style={{ marginTop: 20 }}
        range={range}
        value={value}
        locale={isZh ? 'zh' : 'en'}
        {...minMaxValue}
        dateRender={(date) => {
          if (custom && /(0|6)/.test(date.getDay())) {
            return (
              <div style={{ fontSize: 12, color: '#999' }}>
                <div>打烊</div>
              </div>
            );
          }
          return date.getDate();
        }}
        disabledDate={(date) => {
          // disable 周二
          if (disabled) return /(2)/.test(date.getDay());
          return false;
        }}
        onChange={(value) => {
          setValue(value);

          Toast.show(
            range
              ? value.map((v) => dayjs(v).format('YYYY-MM-DD')).join('至')
              : dayjs(value).format('YYYY-MM-DD')
          );
        }}
      />
    </PageWrap>
  );
}
