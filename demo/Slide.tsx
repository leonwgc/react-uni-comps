import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Slide, styled } from 'react-uni-comps';

const StyledCard = styled.div`
  height: 200px;
  background-size: 100%;
  background-position: center;
`;

const images = [
  'https://t7.baidu.com/it/u=1605309380,911023805&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=3444349230,194273721&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=3889655668,2711219959&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2808499218,4024510450&fm=193&f=GIF',
];

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="水平" padding={0}>
        <Slide autoPlay direction="horizontal">
          {images.map((item, index) => (
            <StyledCard key={index} style={{ backgroundImage: `url(${item})` }}></StyledCard>
          ))}
        </Slide>
      </DemoBlock>

      <DemoBlock title="垂直" padding={0}>
        <Slide interval={1000} autoPlay direction="vertical">
          {images.map((item, index) => (
            <StyledCard key={index} style={{ backgroundImage: `url(${item})` }}></StyledCard>
          ))}
        </Slide>
      </DemoBlock>
    </PageWrap>
  );
}
