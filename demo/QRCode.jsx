import React, { useState, useCallback } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { QRCode } from 'react-uni-comps';

export default function App() {
  const [v, setV] = useState(0);
  const text = v == 0 ? 'https://www.baidu.com/' : 'https://juejin.cn/';

  const changeText = useCallback(() => {
    setV((v) => (v == 0 ? 1 : 0));
  }, []);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <QRCode text={text} onClick={changeText}></QRCode>
      </DemoBlock>

      <DemoBlock title="尺寸">
        <QRCode text={text} size={180} onClick={changeText}></QRCode>
      </DemoBlock>

      <DemoBlock title="颜色">
        <QRCode text={text} colorDark="red" colorLight="#ccc" onClick={changeText}></QRCode>
      </DemoBlock>
    </PageWrap>
  );
}
