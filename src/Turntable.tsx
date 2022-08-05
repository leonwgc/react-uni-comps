import React, { useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import { StringOrNumber, BaseProps } from './types';
import useMount from './hooks/useMount';
import useForceUpdate from './hooks/useForceUpdate';

const getClassName = prefixClassName('uc-turntable');

type PrizeInfo = {
  /** 奖品id */
  id: StringOrNumber;
  /** 奖品名称 */
  name: string;
  /** 奖品图片链接 */
  img: string;
  /** 扇形背景色 */
  color?: string;
};

type Props = {
  /** 奖品列表 */
  prizeList?: Array<PrizeInfo>;
  /**
   * 转动圈数
   * @default 5
   *  */
  round?: number;
  /**
   * 每一个扇形的外边框颜色
   * @default #ff9800
   */
  borderColor?: string;
  /**
   * 转动需要持续的时间(秒)
   * @default 5
   */
  duration?: number;
  /** 转盘指针 */
  pointer?: React.ReactNode;
  /**
   * 从后端拉取获奖索引,并开始转动
   */
  onStart?: (start: (index: number) => void) => void;
  /**
   * 转动结束,带上索引信息
   */
  onEnd?: (index: number) => void;

  /**
   * 宽高
   * @default 300
   */
  size?: number;
} & BaseProps;

const StyledWrap = styled.div`
  position: relative;
  overflow: hidden;
  .${getClassName('inner')} {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .${getClassName('pointer')} {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
    transform: translate(-43.75%, -50%);
  }
  .${getClassName('name')} {
    position: absolute;
    left: 10px;
    top: 20px;
    width: calc(100% - 20px);
    font-size: 12px;
    text-align: center;
    color: #ff5722;
  }
  .${getClassName('img')} {
    position: absolute;
    left: calc(50% - 30px / 2);
    top: 60px;
    width: 30px;
    height: 30px;
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
  .${getClassName('prize')} {
    position: absolute;
    left: 25%;
    top: 0;
    width: 50%;
    height: 50%;
  }
  .${getClassName('item')} {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: center bottom;
  }
`;

const prizeBgColors = [
  'rgb(255, 231, 149)',
  'rgb(255, 247, 223)',
  'rgb(255, 231, 149)',
  'rgb(255, 247, 223)',
  'rgb(255, 231, 149)',
  'rgb(255, 247, 223)',
];

/** 转盘抽奖 */
const Turntable = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    size = 300,
    prizeList = [],
    round = 5,
    duration = 5,
    pointer,
    borderColor = '#ff9800',
    onStart,
    onEnd,
    ...rest
  } = props;

  // 用来锁定转盘，避免同时多次点击转动
  const lock = useRef(false);

  // 开始转动的角度
  const startRotateDegree = useRef(0);
  // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上
  const rotateAngle = useRef<any>(0);
  const rotateTransition = useRef('');

  const wrapRef = useRef<HTMLDivElement>();
  const innerRef = useRef<HTMLDivElement>();
  const canvasDomRef = useRef<HTMLCanvasElement>();

  const forceUpdate = useForceUpdate();

  useImperativeHandle(ref, () => wrapRef.current);

  // 根据index计算每一格要旋转的角度的样式
  const getRotateAngle = (index: number) => {
    const angle = (360 / prizeList.length) * index + 180 / prizeList.length;
    return {
      transform: `rotate(${angle}deg)`,
    };
  };

  useMount(() => {
    const prizeNum = prizeList.length;

    // 开始绘画
    const canvas = canvasDomRef.current;
    const luckdraw = wrapRef.current;

    let dpr = window.devicePixelRatio || 1;
    dpr = dpr >= 1 ? Math.ceil(dpr) : 1;

    if (canvas && luckdraw) {
      const canvasW = dpr * size; // 画板的高度
      const canvasH = dpr * size; // 画板的宽度

      canvas.width = canvasW;
      canvas.height = canvasH;

      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';

      const ctx = canvas.getContext('2d');

      // translate方法重新映射画布上的 (0,0) 位置
      ctx.translate(0, canvasH);
      // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的
      ctx.rotate((-90 * Math.PI) / 180);
      // 圆环的外圆的半径,可用来调整圆盘大小来适应外部盒子的大小
      const outRadius = canvasW / 2 - 1;
      // 圆环的内圆的半径
      const innerRadius = 0;
      const baseAngle = (Math.PI * 2) / prizeNum; // 每个奖项所占角度数
      ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认色
      ctx.strokeStyle = borderColor; // 设置画图线的颜色
      for (let index = 0; index < prizeNum; index++) {
        const angle = index * baseAngle;
        if (prizeList[index]['color']) {
          ctx.fillStyle = prizeList[index]['color'];
        } else {
          ctx.fillStyle = prizeBgColors[index];
        }
        ctx.beginPath();
        ctx.arc(canvasW * 0.5, canvasH * 0.5, outRadius, angle, angle + baseAngle, false);
        ctx.arc(canvasW * 0.5, canvasH * 0.5, innerRadius, angle + baseAngle, angle, true);
        ctx.stroke();
        ctx.fill();
        ctx.save();
      }
      ctx.scale(dpr, dpr);
    }
  });

  // 转动起来
  const rotate = (index: number) => {
    if (index >= 0 && index < prizeList.length) {
      const rotateAngleValue =
        startRotateDegree.current +
        round * 360 +
        360 -
        (180 / prizeList.length + (360 / prizeList.length) * index) -
        (startRotateDegree.current % 360);
      startRotateDegree.current = rotateAngleValue;

      rotateAngle.current = `rotate(${rotateAngleValue}deg)`;
      rotateTransition.current = `transform ${duration}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`;

      forceUpdate();
      setTimeout(() => {
        // end
        lock.current = false;
        onEnd?.(index);
      }, duration * 1000 + 500);
    }
  };

  const startTurns = () => {
    if (lock.current) {
      return false;
    }

    lock.current = true;

    onStart(rotate);
  };

  return (
    <StyledWrap
      {...rest}
      className={clsx(getClassName(), className)}
      ref={wrapRef}
      style={{ width: size, height: size }}
    >
      <div
        className={getClassName('inner')}
        ref={innerRef}
        style={{ transform: rotateAngle.current, transition: rotateTransition.current }}
      >
        <canvas ref={canvasDomRef}>浏览器版本过低</canvas>
        <div className={getClassName('prize')}>
          {prizeList.map((item, index) => (
            <div key={index} className={getClassName('item')} style={getRotateAngle(index)}>
              <div className={getClassName('name')}>{item.name}</div>
              <div className={getClassName('img')}>
                <img src={item.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={getClassName('pointer')} onClick={startTurns}>
        {pointer}
      </div>
    </StyledWrap>
  );
});

Turntable.displayName = 'UC-Turntable';

export default Turntable;
