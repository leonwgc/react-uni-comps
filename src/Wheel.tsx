import React, { useCallback, useEffect, useRef, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import { isTouch } from './dom';
import useCallbackRef from './hooks/useCallbackRef';
import useUpdateEffect from './hooks/useUpdateEffect';
import { animationSlow } from './vars';

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
  /** 当前滚动值的索引 */
  index?: number;
  /** 索引改变回调 */
  onIndexChange?: (newIndex: number) => void;
};

const StyledWrap = styled.div`
  transform: translate3d(0px, 105px, 0px);
  transition-duration: ${animationSlow}ms;
  transition-property: transform;
  touch-action: none;
  flex: 1;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 18px;
    user-select: none;
    cursor: grab;
  }
`;

const itemHeight = 35;
const firstItemY = 105;

// 惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const Wheel = (props: Props): React.ReactElement => {
  const { onIndexChange, data = [], index = 0, className, ...rest } = props;
  const elRef = useRef<HTMLElement>();
  const onIndexChangeRef = useCallbackRef(onIndexChange);
  const yRef = useRef(firstItemY);
  const [_index, _setIndex] = useState(index);

  const momentumRef = useRef({
    touchStartTime: 0,
  });

  const scrollToIndex = useCallback(
    (index, useTransition = true) => {
      if (elRef.current) {
        elRef.current.style.transitionProperty = useTransition ? 'transform' : 'none';
        const y = firstItemY - itemHeight * index;
        yRef.current = y;
        if (elRef.current) {
          elRef.current.style.transform = `translate3d(0,${y}px,0)`;
        }
      }
    },
    [yRef]
  );

  const getIndexByY = useCallback(() => {
    const y = yRef.current;
    const d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [yRef]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // guard to prevent from index out of range
    if (_index < 0) {
      _setIndex(0);
    } else if (_index >= data.length) {
      _setIndex(data.length - 1);
    }
  });

  // sync outside
  useUpdateEffect(() => {
    if (_index !== index) {
      _setIndex(index);
    }
  }, [index]);

  useUpdateEffect(() => {
    onIndexChangeRef?.current(_index);
  }, [_index]);

  useEffect(() => {
    scrollToIndex(_index, false);
  }, [_index, scrollToIndex]);

  const touchEnd = () => {
    const min = -1 * (data.length - 1) * itemHeight + firstItemY;
    const max = firstItemY;

    let newIndex;
    if (yRef.current >= max - itemHeight / 2) {
      newIndex = 0;
    } else if (yRef.current <= min) {
      newIndex = data.length - 1;
    } else {
      newIndex = getIndexByY();
    }

    scrollToIndex(newIndex, false);
    _setIndex(newIndex);
  };

  const touchEndRef = useCallbackRef(touchEnd);

  useLayoutEffect(() => {
    const el = elRef.current;
    const elTouchEnd = touchEndRef.current;
    let isMoving = false;

    const touchStart = () => {
      elRef.current.style.transitionProperty = 'none';
      isMoving = true;
      momentumRef.current.touchStartTime = Date.now();
    };

    const touchEnd = () => {
      if (isMoving) {
        elTouchEnd();
      }
      isMoving = false;
    };

    el.addEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);
    el.addEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);

    if (!isTouch) {
      document.addEventListener('mouseup', touchEnd);
    }

    return () => {
      el.removeEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);
      el.removeEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);
      if (!isTouch) {
        document.removeEventListener('mouseup', touchEnd);
      }
    };
  }, [touchEndRef]);

  return (
    <FingerGestureElement
      ref={elRef}
      onPressMove={(e) => {
        yRef.current += e.deltaY;

        const distance = e.deltaY;
        const duration = Date.now() - momentumRef.current.touchStartTime;
        elRef.current.style.transform = `translate3d(0,${yRef.current}px,0)`;

        if (duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE) {
          // momentum effect
          elRef.current.style.transitionProperty = 'transform';
          elRef.current.style.transitionTimingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)';
          elRef.current.offsetHeight;
          const speed = Math.abs(distance / duration);
          yRef.current += (speed / 0.003) * (distance < 0 ? -1 : 1);
          scrollToIndex(getIndexByY());
        }
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
