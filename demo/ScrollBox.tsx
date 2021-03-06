import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { ScrollBox, styled } from 'react-uni-comps';

const images = [
  'https://t7.baidu.com/it/u=2797388301,556999201&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1645722484,272016793&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=165171033,838989231&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1854303985,2925188750&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2797388301,556999201&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1645722484,272016793&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1854303985,2925188750&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2797388301,556999201&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1645722484,272016793&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1854303985,2925188750&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1530513282,1246043720&fm=193&f=GIF',
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
