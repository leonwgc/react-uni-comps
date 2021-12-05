import React, { useState } from 'react';
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
  return (
    <div style={{ margin: 20 }}>
      <Button type="primary" onClick={() => setV(true)}>
        选日期
      </Button>
      <StyledPicker
        value="2021-11-19"
        visible={v}
        onClose={() => setV(false)}
        onOk={(value) => Toast.show(dayjs(value).format('YYYY-MM-DD'))}
      />
    </div>
  );
}
