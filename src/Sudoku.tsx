import React, { useRef, useState, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import { StringOrNumber, BaseProps } from './types';
import useForceUpdate from './hooks/useForceUpdate';
import useMount from './hooks/useMount';
import useEventListener from './hooks/useEventListener';
import Space from './Space';

const getClassName = prefixClassName('uc-sudoku');

const seq = [0, 1, 2, 5, 8, 7, 6, 3]; // turn sequence

// key top-down,left-right ,value: prizeList seq
const map = {
  0: 0,
  1: 1,
  2: 2,
  3: 7,
  5: 3,
  6: 6,
  7: 5,
  8: 4,
};

type PrizeInfo = {
  /** 奖品id */
  id?: StringOrNumber;
  /** 奖品名称 */
  name: string;
  /** 奖品图片链接 */
  img?: string;
};

type Props = {
  /** 奖品列表 */
  prizeList?: Array<PrizeInfo>;
  /** 转盘指针 */
  pointer?: React.ReactNode;
  /**
   * 初始速度
   * @default 150
   *  */
  speed?: number;
  /**
   * 转动圈数
   * @default 30
   *  */
  round?: number;
  /**
   * 从后端拉取获奖索引,并开始转动
   */
  onStart?: (start: (index: number) => void) => void;
  /**
   * 转动结束,带上索引信息
   */
  onEnd?: (index: number) => void;
  /**
   * 间距
   * @default 4
   *  */
  gap?: number;
} & BaseProps;

const StyledWrap = styled(Space)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .${getClassName('item')} {
    color: #fff;
    background-color: #005cff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;

    &.active {
      background-size: 100% 100%;
      background: rgba(0, 0, 0, 0.1);
      color: #000;
      font-weight: bolder;
    }
  }

  .${getClassName('prize')} {
    font-size: 14px;
    text-align: center;

    img {
      width: 35px;
    }
  }

  img {
    max-width: 100%;
  }

  .${getClassName('pointer')} {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;

/** 9宫格抽奖 */
const Sudoku = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    pointer,
    prizeList = [],
    round = 30,
    speed = 150,
    onStart,
    onEnd,
    gap = 4,
    ...rest
  } = props;

  const forceUpdate = useForceUpdate();

  const lock = useRef(false);

  // 转动到的商品的index
  const index = useRef(-1);

  // 转动次数
  const steps = useRef(0);

  // 初始速度
  const speedRef = useRef(speed);

  const roundRef = useRef(round);

  const timer = useRef(0);

  const [w, setW] = useState<StringOrNumber>('33%');

  const wrapElRef = useRef<HTMLDivElement>();
  useImperativeHandle(ref, () => wrapElRef.current);

  const resize = useCallback(() => {
    const wrapEl = wrapElRef.current;
    const w = Math.floor((wrapEl.offsetWidth - gap * 2) / 3);

    setW(w);
  }, []);

  useMount(resize);

  useEventListener(() => window, 'resize', resize);

  const rollup = (winIndex: number) => {
    if (winIndex >= 0 && winIndex < 8) {
      steps.current += 1;
      let idx = index.current;
      const count = seq.length;
      idx += 1;
      if (idx > count - 1) {
        idx = 0;
      }
      index.current = idx;
      forceUpdate();
      getPrize(winIndex);
    }
  };

  const getPrize = (winIndex: number) => {
    if (steps.current > roundRef.current && winIndex === index.current) {
      clearTimeout(timer.current);
      // reset
      index.current = -1;
      timer.current = 0;
      steps.current = 0;
      speedRef.current = speed;
      roundRef.current = round;

      setTimeout(() => {
        index.current = seq[winIndex];
        lock.current = false;
        onEnd?.(winIndex);
      }, 100);
    } else {
      if (steps.current < roundRef.current) {
        speedRef.current -= 4;
      } else {
        speedRef.current += 20;
      }
      // start to roll
      timer.current = window.setTimeout(() => rollup(winIndex), speedRef.current);
    }
  };

  const start = () => {
    if (!lock.current) {
      lock.current = true;

      onStart(rollup);
    }
  };

  const renderBlock = (index) => {
    const item = prizeList[index];

    return (
      <div className={getClassName('prize')}>
        <div className={getClassName('img')}>
          <img alt="prize" src={item.img} />
        </div>
        <div className={getClassName('name')}>{item.name}</div>
      </div>
    );
  };

  if (!prizeList || prizeList.length !== 8) {
    // bad data
    return null;
  }

  return (
    <StyledWrap {...rest} className={(getClassName(), className)} ref={wrapElRef} size={gap}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
        <div
          key={v}
          style={{ height: w, width: w }}
          className={clsx(getClassName('item'), {
            active: v === seq[index.current],
          })}
        >
          {v === 4 ? (
            <div className={getClassName('pointer')} onClick={start}>
              {pointer}
            </div>
          ) : (
            renderBlock(map[v])
          )}
        </div>
      ))}
    </StyledWrap>
  );
});

Sudoku.displayName = 'UC-Sudoku';

export default Sudoku;
