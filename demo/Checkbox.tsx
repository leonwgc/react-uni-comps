import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Space, Checkbox, styled } from 'react-uni-comps';

const StyledContent = styled.div`
  .uc-checkbox {
    margin: 16px;

    &.checked {
      .checkbox {
        &.styled {
          background-color: blue;
          border: 1px solid blue;
        }
      }
    }
  }
`;

export default function App() {
  const [checked, setChecked] = useState(true);

  return (
    <PageWrap>
      <StyledContent>
        <DemoBlock title="默认">
          <Checkbox />

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
        </DemoBlock>

        <DemoBlock title="非受控">
          <Checkbox defaultChecked onChange={(c) => console.log(c)}>
            非受控
          </Checkbox>
        </DemoBlock>
      </StyledContent>
    </PageWrap>
  );
}
