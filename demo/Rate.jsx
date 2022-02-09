import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Rate, Space, Toast, styled, Icon } from 'react-uni-comps';

const StyledRate = styled(Rate)`
  .char {
    &.active {
      color: red;
    }
  }
`;

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="半星">
        <Rate
          defaultValue={2.5}
          allowHalf
          onChange={(v) => Toast.show({ content: v, duration: 800 })}
        />
      </DemoBlock>
      <DemoBlock title="只读">
        <Rate readonly value={4} />
      </DemoBlock>

      <DemoBlock title="清除">
        <Space direction="vertical">
          <Space align="center">
            <Rate
              defaultValue={3}
              allowClear={true}
              onChange={(v) => Toast.show({ content: v, duration: 800 })}
            />
            <div>可清除</div>
          </Space>
          <Space align="center">
            <Rate
              defaultValue={3}
              allowClear={false}
              onChange={(v) => Toast.show({ content: v, duration: 800 })}
            />
            <div>不可清除</div>
          </Space>
        </Space>
      </DemoBlock>

      <DemoBlock title="自定义字符和样式">
        <Space direction="vertical">
          <StyledRate
            allowHalf
            defaultValue={3}
            char={<Icon type="uc-icon-yonghu" />}
            onChange={(v) => Toast.show({ content: v, duration: 800 })}
          />
          <StyledRate
            allowHalf
            defaultValue={1.5}
            char={'M'}
            onChange={(v) => Toast.show({ content: v, duration: 800 })}
          />
          <StyledRate
            allowHalf
            defaultValue={3.5}
            char={'好'}
            onChange={(v) => Toast.show({ content: v, duration: 800 })}
          />
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
