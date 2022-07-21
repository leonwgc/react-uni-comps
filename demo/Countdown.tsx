import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Countdown, Space } from 'react-uni-comps';
import dayjs from 'dayjs';

export default function App() {
  const deadline = dayjs().add(2, 'd').toDate();

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Countdown value={deadline} onFinish={() => console.log('finish1')}>
          {({ day, hour, min, sec }) => (
            <Space size={2}>
              {day}天{hour}小时{min}分{sec}秒
            </Space>
          )}
        </Countdown>
      </DemoBlock>

      <DemoBlock title="显示毫秒">
        <Countdown millisec value={deadline} onFinish={() => console.log('finish2')}>
          {({ day, hour, min, sec, millisec }) => (
            <Space size={2}>
              {day}天{hour}小时{min}分{sec}秒 {millisec} ms
            </Space>
          )}
        </Countdown>
      </DemoBlock>
    </PageWrap>
  );
}
