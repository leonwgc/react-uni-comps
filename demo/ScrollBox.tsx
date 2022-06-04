import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ScrollBox, styled } from 'react-uni-comps';

const items = Array.from(new Array(10), (v, i) => i);

const StyledItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #eee;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export default function App() {
  return (
    <PageWrap>
      <DemoBlock padding={0} title="显示指示器 (默认)">
        <ScrollBox style={{ padding: '20px 12px', height: 90 }}>
          {items.map((i) => (
            <StyledItem key={i}>{i}</StyledItem>
          ))}
        </ScrollBox>
      </DemoBlock>

      <DemoBlock padding={0} title="指示器样式">
        <ScrollBox
          style={{ padding: '20px 12px', height: 90 }}
          indicatorStyle={{
            background: 'yellow',
            width: 60,
            height: 4,
            bottom: 4,
            borderRadius: 5,
          }}
          fillColor="red"
        >
          {items.map((i) => (
            <StyledItem key={i}>{i}</StyledItem>
          ))}
        </ScrollBox>
      </DemoBlock>

      <DemoBlock padding={0} title="隐藏指示器">
        <ScrollBox style={{ padding: '20px 12px', height: 90 }} showIndicator={false}>
          {items.map((i) => (
            <StyledItem key={i}>{i}</StyledItem>
          ))}
        </ScrollBox>
      </DemoBlock>
    </PageWrap>
  );
}
