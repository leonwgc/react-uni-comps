import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import dayjs from 'dayjs';
import { Toast, Button, DatePicker, styled } from 'react-uni-comps';

const StyledPicker = styled(DatePicker)`
  .header {
    .cancel-text {
      color: red;
    }
    .title {
      color: green;
    }
    .ok-text {
      color: blue;
    }
  }
`;

export default function App() {
  const [v, setV] = useState();
  const [val, setVal] = useState(new Date());
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Button type="primary" onClick={() => setV(true)}>
          选日期
        </Button>
      </DemoBlock>

      <StyledPicker
        // value="2021/11/19" // 2021-11-19
        value={val}
        visible={v}
        onClose={() => setV(false)}
        onOk={(value) => {
          Toast.show(dayjs(value).format('YYYY-MM-DD'));
          setVal(value);
        }}
        onChange={(value) => {
          Toast.show({
            modal: false,
            content: dayjs(value).format('YYYY-MM-DD'),
          });
        }}
      />
    </PageWrap>
  );
}
