import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import dayjs from 'dayjs';
import { Toast, Button, DatePicker, styled } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState<boolean>();
  const [val, setVal] = useState<string | Date>('1990-12-20');
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Button type="primary" onClick={() => setV(true)}>
          选日期
        </Button>
      </DemoBlock>

      <DatePicker
        value={val}
        visible={v}
        onClose={() => setV(false)}
        onOk={(value) => {
          Toast.show(dayjs(value).format('YYYY-MM-DD'));
          setVal(value);
        }}
      />
    </PageWrap>
  );
}
