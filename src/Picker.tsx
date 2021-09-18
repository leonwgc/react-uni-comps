import React, { HTMLAttributes, useCallback, useRef } from 'react';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import useThisRef from './hooks/useThisRef';
import clsx from 'clsx';

type DataItem = {
  label: string;
  value: string;
  children?: DataItem[];
};

type Props = {
  data: DataItem[];
  onChange?: (value: string[] | string) => void;
} & HTMLAttributes<HTMLElement>;

const StyledPicker = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  height: 245px;

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),
      linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));
    background-repeat: no-repeat;
    background-position: top, bottom;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    pointer-events: none;
    background-size: 100% 105px;
  }

  .hairline {
    position: absolute;
    height: 35px;
    width: 100%;
    border: 1px solid #d8d8d8;
    border-left: 0;
    border-right: 0;
    top: 105px;
  }

  .columnitem {
    width: 0;
    flex-grow: 1;
    height: 100%;

    .content {
      display: block;
      position: relative;
      text-align: center;
      overflow-y: hidden;
      height: 100%;

      .wrapper {
        transform: translate3d(0px, 105px, 0px);
        transition-duration: 0.24s;
        transition-property: transform;
        transition-timing-function: ease-in-out;
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 35px;
          color: #000;
        }
      }
    }
  }
`;

const itemHeight = 35;
const firstItemY = 105;

/** picker select */
const Picker = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>((props, ref) => {
  const { onChange, data = [], ...rest } = props;
  const elRef = useRef<HTMLElement>();
  const thisRef = useThisRef({
    y: firstItemY,
    data,
    onChange,
  });

  const scrollToIndex = useCallback((index) => {
    elRef.current.style.transitionProperty = 'transform';
    const y = firstItemY - itemHeight * index;
    setTimeout(() => {
      elRef.current.style.transform = `translate3d(0,${y}px,0)`;
    });
  }, []);

  const getIndexByY = useCallback(() => {
    const y = thisRef.current.y;
    const d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [thisRef]);

  const getValueByIndex = useCallback(
    (index) => {
      const v = thisRef.current;
      return v.data[index].value;
    },
    [thisRef]
  );

  const onTouchEnd = useCallback(() => {
    const v = thisRef.current;
    const list = v.data;
    const min = -1 * (list.length - 1) * 35 + firstItemY;
    const max = firstItemY;

    let index;
    if (v.y >= max - itemHeight / 2) {
      v.y = firstItemY;
      index = 0;
    } else if (v.y <= min) {
      v.y = min;
      index = v.data.length - 1;
    } else {
      index = getIndexByY();
    }
    scrollToIndex(index);
    v.onChange?.(getValueByIndex(index));
  }, [getIndexByY, scrollToIndex, thisRef, getValueByIndex]);

  return (
    <StyledPicker {...rest} className={clsx('uc-picker')}>
      <div className="mask"></div>
      <div className="hairline"></div>
      <div className="columnitem">
        <div className="content">
          <FingerGestureElement
            ref={elRef}
            onTouchStart={() => {
              elRef.current.style.transitionProperty = 'none';
            }}
            onTouchEnd={onTouchEnd}
            onPressMove={(e) => {
              e.preventDefault();
              const v = thisRef.current;
              v.y += e.deltaY;
              elRef.current.style.transform = `translate3d(0,${v.y}px,0)`;
            }}
          >
            <div className="wrapper">
              {data.map((item) => (
                <div className="item" key={item.value}>
                  {item.label}
                </div>
              ))}
            </div>
          </FingerGestureElement>
        </div>
      </div>
    </StyledPicker>
  );
});

Picker.displayName = 'UC-Picker';

export default Picker;
