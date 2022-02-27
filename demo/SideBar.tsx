import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import Block from './common/DemoBlock';
import { styled, SideBar, Icon, Space } from 'react-uni-comps';

const StyledWrap = styled.div`
  display: flex;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;

const items = [
  { title: '选项一' },
  {
    title: (
      <Space>
        <Icon type="uc-icon-tips" /> 选项二
      </Space>
    ),
  },
  { title: '选项三', disabled: true },
  { title: '选项4' },
  { title: '选项5' },
  { title: '选项6' },
];

export default function App() {
  const [index, setIndex] = useState(1);
  return (
    <PageWrap>
      <Block title="默认" padding={0}>
        <StyledWrap>
          <SideBar index={index} onChange={setIndex}>
            {items.map((item, idx) => (
              <SideBar.Item {...item} key={idx}></SideBar.Item>
            ))}
          </SideBar>
          <div className="content">你选择了{items[index].title}</div>
        </StyledWrap>
      </Block>

      <Block title="自定义" padding={0}>
        <StyledWrap>
          <SideBar style={{ height: 200, width: 105 }} onChange={setIndex} defaultIndex={4}>
            {items.map((item, idx) => (
              <SideBar.Item {...item} key={idx}></SideBar.Item>
            ))}
          </SideBar>
        </StyledWrap>
      </Block>
    </PageWrap>
  );
}
