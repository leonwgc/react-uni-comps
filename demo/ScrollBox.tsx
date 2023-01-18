import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ScrollBox, styled } from 'react-uni-comps';

const images = [
  'https://img2.baidu.com/it/u=4133235991,1912108762&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',

  'https://img0.baidu.com/it/u=2160965648,2598192033&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
  'https://img2.baidu.com/it/u=2883781246,868703577&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',

  'https://img2.baidu.com/it/u=1422879266,2468931547&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',

  'https://img0.baidu.com/it/u=4047542955,1878450439&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',

  'https://img0.baidu.com/it/u=89888174,2955329491&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',

  'https://img2.baidu.com/it/u=39601226,3945101934&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
  'https://img1.baidu.com/it/u=429420293,1086602202&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
  'https://img1.baidu.com/it/u=623315734,2506623018&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
];

const StyledImage = styled.img`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export default function App() {
  return (
    <PageWrap>
      <DemoBlock padding={0} title="默认">
        <ScrollBox style={{ padding: '30px 12px' }}>
          {images.map((i) => (
            <StyledImage src={i} />
          ))}
        </ScrollBox>
      </DemoBlock>

      <DemoBlock padding={0} title="指示器">
        <ScrollBox style={{ padding: '30px 12px' }} showIndicator>
          {images.map((i) => (
            <StyledImage src={i} />
          ))}
        </ScrollBox>
      </DemoBlock>

      <DemoBlock padding={0} title="指示器样式">
        <ScrollBox
          showIndicator
          style={{ padding: '30px 12px' }}
          indicatorStyle={{
            background: '#eee',
            width: 20,
            height: 4,
            bottom: 12,
            borderRadius: 5,
          }}
          fillColor="red"
        >
          {images.map((i) => (
            <StyledImage src={i} />
          ))}
        </ScrollBox>
      </DemoBlock>
    </PageWrap>
  );
}
