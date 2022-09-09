import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Checkbox, Space, styled, clsx } from 'react-uni-comps';

const StyledBox = styled.div`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &.checked {
    background: #ecf3ff;
    border: 1px solid #005cff;
    color: #005cff;
  }
`;

export default function App() {
  const [checked, setChecked] = useState(true);

  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Space wrap>
          <Checkbox checked={checked} onChange={setChecked}>
            默认
          </Checkbox>

          <Checkbox checked={checked} indeterminate>
            半选状态
          </Checkbox>

          <Checkbox disabled>disabled</Checkbox>

          <Checkbox checked disabled>
            checked
          </Checkbox>
        </Space>
      </DemoBlock>

      <DemoBlock title="非受控">
        <Checkbox defaultChecked onChange={(c) => console.log(c)}>
          非受控
        </Checkbox>
      </DemoBlock>

      <DemoBlock title="自定义显示">
        <Checkbox
          render={(checked, disabled) => {
            return (
              <StyledBox className={clsx({ checked })}>
                {checked ? 'checked' : 'unchecked'}
              </StyledBox>
            );
          }}
        />
      </DemoBlock>
    </PageWrap>
  );
}
