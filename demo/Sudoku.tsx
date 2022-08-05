import React, { useRef } from 'react';
import { styled, AspectRatio, useForceUpdate, clsx } from 'react-uni-comps';

const prizeList = [
  {
    id: 'xiaomi',
    name: '小米手机',
    img: 'https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png',
  },
  {
    id: 'blue',
    color: 'rgb(251, 219, 216)',
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
    color: 'rgba(246, 142, 46, 0.5)',
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
];

const StyledBlock = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  .item {
    display: inline-flex;
    width: 30%;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #999;
    font-size: 24px;
    border-radius: 8px;

    &.active {
      background-size: 100% 100%;
      background: rgba(0, 0, 0, 0.1);
      color: #000;
      font-weight: bolder;
    }
  }
`;

const seq = [0, 1, 2, 5, 8, 7, 6, 3];

export default function App(props) {
  const forceUpdate = useForceUpdate();

  const lock = useRef(false);
  // 转动到的商品的index
  const index = useRef(-1);
  // 转动次数
  const steps = useRef(0);
  // 初始速度
  const velocity = useRef(150);
  // 至少需要转动多少次再进入抽奖环节
  const cycle = useRef(30);
  // 转动定时器
  const timer = useRef<any>();

  const rollMarquee = (winIndex: number) => {
    steps.current += 1;
    let idx = index.current; // 当前转动到哪个位置
    const count = seq.length;
    idx += 1;
    if (idx > count - 1) {
      idx = 0;
    }
    index.current = idx;
    forceUpdate();
    getPrize(winIndex);
  };

  const getPrize = (winIndex: number) => {
    // 当前转动次数符合条件 && 转动到中奖位置
    if (steps.current > cycle.current && winIndex === index.current) {
      clearTimeout(timer.current); // 清除转动定时器
      //恢复默认值和初始值
      index.current = -1;
      timer.current = 0;
      steps.current = 0;
      velocity.current = 150;
      cycle.current = 30;
      setTimeout(() => {
        index.current = seq[winIndex];
        // emit('end-turns');
        console.log('done');
        lock.current = false;
      }, 500);
    } else {
      if (steps.current < cycle.current) {
        velocity.current -= 4;
      } else {
        velocity.current += 20;
      }
      // 开始转动抽奖
      timer.current = setTimeout(() => rollMarquee(winIndex), velocity.current);
    }
  };

  const start = () => {
    if (!lock.current) {
      lock.current = true;
      // emit('start-turns');
      rollMarquee(Math.floor(seq.length * Math.random()));
    }
  };
  return (
    <StyledBlock>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <AspectRatio
          ratio={1 / 1}
          className={clsx('item', { active: value === seq[index.current] })}
        >
          {value === 4 ? (
            <div
              onClick={() => {
                // start
                start();
              }}
            >
              <img src="https://img13.360buyimg.com/imagetools/jfs/t1/205479/17/4245/32041/61309346E02bd3b6b/b41be60bedbb1e69.png" />
            </div>
          ) : (
            value + 1
          )}
        </AspectRatio>
      ))}
    </StyledBlock>
  );
}
