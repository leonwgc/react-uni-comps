import React, { useState } from 'react';
import { Space, Checkbox, Divider, Button, styled } from '../src';

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

const StyledDivider = styled(Divider)`
  margin: 16px 0;
`;

export default function App() {
  const [checked, setChecked] = useState(true);

  return (
    <StyledContent>
      <StyledDivider>controlled</StyledDivider>
      <Checkbox checked={checked} onChange={setChecked}>
        controlled check
      </Checkbox>
      <Button onClick={() => setChecked(!checked)}>toggle checked outside</Button>
      <StyledDivider>uncontrolled</StyledDivider>
      <Checkbox defaultChecked onChange={(c) => console.log(c)}>
        uncontrolled check
      </Checkbox>

      <StyledDivider>styled</StyledDivider>

      <Checkbox className="styled" defaultChecked>
        styled
      </Checkbox>

      <StyledDivider>others</StyledDivider>
      <Space wrap>
        <Checkbox style={{ borderRadius: '50%' }} size={60} defaultChecked>
          good
        </Checkbox>
        <Checkbox
          style={{ backgroundColor: 'red', borderRadius: '50%' }}
          size={32}
          defaultChecked
          disabled
        >
          love u
        </Checkbox>
        <Checkbox disabled>love u</Checkbox>
        <Checkbox disabled checked>
          love u
        </Checkbox>
      </Space>
    </StyledContent>
  );
}
