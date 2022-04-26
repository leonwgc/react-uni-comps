import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Masonry, styled, RadioGroup, Cell } from 'react-uni-comps';

const images = [
  'https://t7.baidu.com/it/u=2797388301,556999201&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1645722484,272016793&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=3946740267,701192077&fm=193&f=GIF',
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

const StyledMasonry = styled(Masonry)`
  font-size: 0;
  img {
    max-width: 100%;
    object-fit: scale-down;
  }
`;

const options = [2, 3];

export default function App() {
  const [columnCount, setColumnCount] = useState(2);

  return (
    <PageWrap>
      <DemoBlock title="瀑布流布局" padding={0}>
        <Cell
          label="列数"
          content={
            <RadioGroup
              options={options}
              value={columnCount}
              onChange={(v) => setColumnCount(v as number)}
            />
          }
        />
        <StyledMasonry columnCount={columnCount} columnGap={8} rowGap={8}>
          {images.map((i, key) => (
            <img src={i} key={key} />
          ))}
        </StyledMasonry>
      </DemoBlock>
    </PageWrap>
  );
}
