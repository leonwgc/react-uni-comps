import React, { useState, useEffect } from 'react';
import PageWrap from './common/PageWrap';
import { NumberKeyboard, Toast, PasswordInput } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <PageWrap>
      <PasswordInput
        style={{ marginTop: 30 }}
        onFinish={() => {
          setVisible(false);

          setTimeout(() => {
            Toast.show({ content: '输入完成:' + v });
          }, 500);
        }}
        mask={false}
        value={v}
        onChange={setV}
        onFocus={() => setVisible(true)}
      />

      <NumberKeyboard
        customKey="."
        onClose={() => setVisible(false)}
        okText="Ok"
        visible={visible}
        onChange={(value) => {
          Toast.show({ content: value, duration: 200 });
          setV(value);
        }}
      />
    </PageWrap>
  );
}
