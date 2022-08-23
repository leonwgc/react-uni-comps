import React from 'react';
import PageWrap from './common/PageWrap';
import { Sudoku, Toast } from 'react-uni-comps';
import DemoBlock from './common/DemoBlock';

//从第一个格子顺时针转， index与之对应
const prizeList = [
  {
    id: 'xiaomi',
    name: '小米手机',
    img: 'https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png',
  },
  {
    id: 'blue',

    name: '蓝牙耳机',
    img: 'https://img13.360buyimg.com/imagetools/jfs/t1/91864/11/15108/139003/5e6f146dE1c7b511d/1ddc5aa6e502060a.jpg',
  },
  {
    id: 'apple',
    name: 'apple watch',
    img: 'https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png',
  },
  {
    id: 'fruit',

    name: '迪士尼苹果',
    img: 'https://img11.360buyimg.com/imagetools/jfs/t1/108308/11/8890/237603/5e6f157eE489cccf1/26e0437cfd93b9c8.png',
  },
  {
    id: 'fish',
    name: '海鲜套餐',
    img: 'https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png',
  },
  {
    id: 'thanks',
    name: '谢谢参与',
    img: 'https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png',
  },
  {
    id: 'blue',

    name: '蓝牙耳机',
    img: 'https://img13.360buyimg.com/imagetools/jfs/t1/91864/11/15108/139003/5e6f146dE1c7b511d/1ddc5aa6e502060a.jpg',
  },
  {
    id: 'thanks',
    name: '谢谢参与',
    img: 'https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png',
  },
];

export default function App() {
  return (
    <PageWrap>
      <DemoBlock>
        <Sudoku
          prizeList={prizeList}
          pointer={
            <div>
              <img
                src="https://img13.360buyimg.com/imagetools/jfs/t1/205479/17/4245/32041/61309346E02bd3b6b/b41be60bedbb1e69.png"
                width={80}
              />
            </div>
          }
          onStart={(start) => {
            const index = Math.floor(Math.random() * prizeList.length);
            console.log(index);
            start(index);
          }}
          onEnd={(index) => {
            console.log(index);
            console.log('end');
            Toast.show('你抽中了: ' + prizeList[index].name);
          }}
        />
      </DemoBlock>
    </PageWrap>
  );
}
