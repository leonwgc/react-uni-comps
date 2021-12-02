import React, { useCallback, useEffect, useRef } from 'react';
import { clsx } from 'react-uni-comps';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';

type DataItem = {
  /** 数据显示文本 */
  label: string;
  /** 数据值 */
  value: string;
  /** 级联数据用children */
  children?: DataItem[];
};

type Props = {
  className?: string;
  style?: React.CSSProperties;
  /** 数据列表 */
  data?: Array<DataItem>;
  /** 值*/
  value?: string | number;
  /** 值改变回调 */
  onChange?: (val: string | number, index: number) => void;
};

const StyledWrap = styled.div`
  transform: translate3d(0px, 105px, 0px);
  transition-duration: 0.24s;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  touch-action: none;
  flex: 1;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 18px;
    color: #333;
  }
`;

const itemHeight = 35;
const firstItemY = 105;

const Wheel = (props: Props): React.ReactElement => {
  const { onChange, data = [], value, className, ...rest } = props;
  const elRef = useRef<HTMLElement>();

  const yRef = useRef(firstItemY);

  const scrollToIndex = useCallback(
    (index) => {
      if (elRef.current) {
        elRef.current.style.transitionProperty = 'transform';
        const y = firstItemY - itemHeight * index;
        yRef.current = y;
        setTimeout(() => {
          if (elRef.current) {
            elRef.current.style.transform = `translate3d(0,${y}px,0)`;
          }
        });
      }
    },
    [yRef]
  );

  const getIndexByY = useCallback(() => {
    const y = yRef.current;
    const d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [yRef]);

  useEffect(() => {
    const index = data.findIndex((d) => d.value === value);
    scrollToIndex(index > -1 ? index : 0);
  }, [scrollToIndex, data, value]);

  const onTouchEnd = () => {
    const min = -1 * (data.length - 1) * itemHeight + firstItemY;
    const max = firstItemY;

    let index;
    if (yRef.current >= max - itemHeight / 2) {
      index = 0;
    } else if (yRef.current <= min) {
      index = data.length - 1;
    } else {
      index = getIndexByY();
    }
    scrollToIndex(index);
    onChange?.(data[index].value, index);
  };

  return (
    <FingerGestureElement
      ref={elRef}
      onTouchStart={() => {
        elRef.current.style.transitionProperty = 'none';
      }}
      onTouchEnd={onTouchEnd}
      onPressMove={(e) => {
        yRef.current += e.deltaY;
        elRef.current.style.transform = `translate3d(0,${yRef.current}px,0)`;
      }}
    >
      <StyledWrap {...rest} className={clsx('uc-wheel', className)}>
        {data.map((item) => (
          <div className="item" key={item.value}>
            {item.label}
          </div>
        ))}
      </StyledWrap>
    </FingerGestureElement>
  );
};

Wheel.displayName = 'UC-Wheel';

export default Wheel;
