import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
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
          <Checkbox checked={checked} onChange={setChecked}>
            默认
          </Checkbox>
        </DemoBlock>

        <DemoBlock title="非受控">
          <Checkbox defaultChecked onChange={(c) => console.log(c)}>
            非受控
          </Checkbox>
        </DemoBlock>

        <DemoBlock title="自定义样式">
          <Space wrap>
            <Checkbox className="styled" defaultChecked>
              自定义样式
            </Checkbox>

            <Checkbox style={{ borderRadius: '50%' }} size={60} defaultChecked>
              自定义样式
            </Checkbox>
            <Checkbox
              style={{ backgroundColor: 'red', borderRadius: '50%' }}
              size={32}
              defaultChecked
              disabled
            >
              自定义样式
            </Checkbox>
            <Checkbox disabled>自定义样式</Checkbox>
            <Checkbox disabled checked>
              自定义样式
            </Checkbox>
          </Space>
        </DemoBlock>
      </StyledContent>
    </PageWrap>
  );
}
