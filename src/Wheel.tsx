import React, { useCallback, useEffect, useRef, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { isTouch } from './dom';
import useCallbackRef from './hooks/useCallbackRef';
import useUpdateEffect from './hooks/useUpdateEffect';
import useDebounce from './hooks/useDebounce';
import { useSpring, animated, config } from '@react-spring/web';
import Text from './Text';
import Touch from 'w-touch';
import type { BaseProps } from './types';

export type DataItem = {
  /** 数据显示 */
  label: React.ReactNode;
  /** 数据值 */
  value: string | number;
  /** 级联数据用children */
  children?: DataItem[];
};

type Props = BaseProps & {
  /** 数据列表 */
  data?: Array<DataItem>;
  /** 当前滚动值的索引 */
  index?: number;
  /** 元素高度，默认 35 */
  itemHeight?: number;
  /** 索引改变回调 */
  onIndexChange?: (newIndex: number) => void;
  /** 自定义label */
  labelRender?: (item: DataItem) => React.ReactNode;
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

// 惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const defaultLabelRender = (item: DataItem) => item.label;

const Wheel = (props: Props): React.ReactElement => {
  const {
    onIndexChange,
    itemHeight = 35,
    style,
    data = [],
    labelRender = defaultLabelRender,
    index = 0,
    className,
    ...rest
  } = props;
  const firstItemY = itemHeight * 3;

  const elRef = useRef<HTMLElement>();
  const onIndexChangeRef = useCallbackRef(onIndexChange);
  const yRef = useRef(firstItemY);
  const [_index, _setIndex] = useState(index);

  const isMovingRef = useRef(false);
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
  }, [yRef, itemHeight, firstItemY]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // guard to prevent from index out of range
    if (_index < 0) {
      _setIndex(0);
    } else if (_index >= data.length && data.length) {
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

  const touchEnd = useCallback(() => {
    if (!isMovingRef.current) {
      return;
    }
    isMovingRef.current = false;
    const min = -1 * (data.length - 1) * itemHeight + firstItemY;
    const max = firstItemY;

    let newIndex;
    if (yRef.current >= max - itemHeight / 2) {
      newIndex = 0;
    } else if (yRef.current <= min) {
      newIndex = Math.max(data.length - 1, 0);
    } else {
      newIndex = getIndexByY();
    }

    scrollToIndex(newIndex);
    setTimeout(() => {
      _setIndex(newIndex);
    }, 300);
  }, [scrollToIndex, itemHeight, firstItemY, getIndexByY, data]);

  const evtProps: any = {};

  evtProps[isTouch ? 'onTouchStart' : 'onMouseDown'] = () => {
    isMovingRef.current = true;
    momentumRef.current.touchStartTime = Date.now();
  };

  useLayoutEffect(() => {
    document.addEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);

    return () => {
      document.removeEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);
    };
  }, [touchEnd]);

  useLayoutEffect(() => {
    const el = elRef.current;
    const fg = new Touch(el, {
      onPressMove: (e) => {
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
      },
    });
    return () => fg.destroy();
  }, [api, getIndexByY, scrollToIndex]);

  return (
    <StyledWrap
      ref={elRef}
      {...rest}
      {...evtProps}
      className={clsx('uc-wheel', className)}
      style={{ ...style, transform: styles.y.to((v) => `translate3d(0,${v}px,0)`) }}
    >
      {data.map((item) => (
        <Text className="item" key={item.value} style={{ height: itemHeight }}>
          {labelRender(item)}
        </Text>
      ))}
    </StyledWrap>
  );
};

Wheel.displayName = 'UC-Wheel';

export default Wheel;
