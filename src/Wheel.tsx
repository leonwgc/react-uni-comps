import React, { useCallback, useEffect, useRef, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import { isTouch } from './dom';
import useCallbackRef from './hooks/useCallbackRef';
import useUpdateEffect from './hooks/useUpdateEffect';
import useDebounce from './hooks/useDebounce';
import { useSpring, animated, config } from '@react-spring/web';

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

const StyledWrap = styled(animated.div)`
  transform: translate3d(0px, 105px, 0px);
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
  const { onIndexChange, style, data = [], index = 0, className, ...rest } = props;
  const elRef = useRef<HTMLElement>();
  const onIndexChangeRef = useCallbackRef(onIndexChange);
  const yRef = useRef(firstItemY);
  const [_index, _setIndex] = useState(index);

  const momentumRef = useRef({
    touchStartTime: 0,
  });

  const [styles, api] = useSpring(() => ({ y: 105, config: config.default }));

  const scrollToIndex = useDebounce(
    (index: number, effect = true) => {
      yRef.current = firstItemY - itemHeight * index;
      api.start({ y: yRef.current, immediate: !effect });
    },
    100,
    [api, yRef]
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

    scrollToIndex(newIndex);
    setTimeout(() => {
      _setIndex(newIndex);
    }, 300);
  };

  const touchEndRef = useCallbackRef(touchEnd);

  useLayoutEffect(() => {
    const el = elRef.current;
    const elTouchEnd = touchEndRef.current;
    let isMoving = false;

    const touchStart = () => {
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
        api.start({ y: yRef.current });

        if (duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE) {
          // momentum effect
          const speed = Math.abs(distance / duration);
          yRef.current += (speed / 0.003) * (distance < 0 ? -1 : 1);
          scrollToIndex(getIndexByY());
        }
      }}
    >
      <StyledWrap
        {...rest}
        className={clsx('uc-wheel', className)}
        style={{ ...style, transform: styles.y.to((v) => `translate3d(0,${v}px,0)`) }}
      >
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
