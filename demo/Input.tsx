import React, { useState } from 'react';
import { Input, Icon, Space, Toast } from 'react-uni-comps';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';

//#endregion

export default function App() {
  const [data, setData] = useState({ pwd: '', eyeOn: false });
  const { pwd = '', eyeOn } = data;

  const [val, setVal] = useState('');
  const [val1, setVal1] = useState('');

  const onFieldChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input value={val} onChange={setVal} placeholder="请输入" clearable />

          <Input
            ime
            onChange={(value) => {
              setVal(value);
            }}
            value={val}
            placeholder="IME中文输入处理"
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="前后缀">
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Input prefix={<Icon type="uc-icon-gouwuche" />} defaultValue={'10'} />

          <Input
            value={val}
            onChange={setVal}
            maxLength={12}
            suffix={<Space size={2}>{val.length} / 12</Space>}
            placeholder="显示输入长度"
          />

          <Input
            placeholder="请输入密码"
            value={pwd}
            type={eyeOn ? 'text' : 'password'}
            onChange={onFieldChange('pwd')}
            clearable
            suffix={
              <Icon
                className="icon"
                onClick={() => onFieldChange('eyeOn')(!eyeOn)}
                type={eyeOn ? 'uc-icon-xianshi' : 'uc-icon-yincang'}
              />
            }
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="多行">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input rows={2} placeholder="请输入" />

          <Input rows={1} autoHeight value={val1} onChange={setVal1} placeholder="高度自适应" />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
