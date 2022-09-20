import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Slide, styled, Button, Space, AutoCenter } from 'react-uni-comps';

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
  const [list, setList] = React.useState(images);

  return (
    <PageWrap>
      <DemoBlock title="" padding={0}>
        <Slide autoPlay interval={2000}>
          {list.map((item, index) => (
            <StyledCard key={index} style={{ backgroundImage: `url(${item})` }}></StyledCard>
          ))}
        </Slide>

        <AutoCenter style={{ margin: '16px auto' }}>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                setList(list.concat(images[0]));
              }}
            >
              添加
            </Button>

            <Button
              danger
              onClick={() => {
                list.pop();
                setList([...list]);
              }}
            >
              删除
            </Button>
          </Space>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
