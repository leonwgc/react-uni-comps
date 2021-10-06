import React, { HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import useThisRef from './hooks/useThisRef';
import Popup from './Popup';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';

type DataItem = {
  label: string;
  value: string;
  children?: DataItem[];
};

type Props = {
  /** 几栏,默认1 */
  cols?: 1 | 2 | 3;
  data: DataItem[];
  value?: string[];
  onClose: () => void;
  onOk?: (value: string[]) => void;
  visible?: boolean;
  okText?: React.ReactNode;
  title?: React.ReactNode;
  cancelText?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

const StyledBar = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  background-color: #fff;
  font-size: 16px;
  touch-action: none;

  .ok {
    ${getThemeColorCss('color')}
  }
  .cancel {
    color: #999;
  }
  .title {
    color: #333;
  }
`;

const StyledPicker = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  height: 245px;
  width: 100%;
  touch-action: none;

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
      display: flex;
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

const getPickerMapData = (data: DataItem[], cols = 1, value = []) => {
  const ret = [];
  for (let i = 0; i < cols; i++) {
    ret.push([]);
  }

  data?.map((d) => {
    ret[0].push(d);
  });

  if (cols > 1) {
    let lastIndex = data.findIndex((d) => d.value === value[0]);
    lastIndex = lastIndex === -1 ? 0 : lastIndex;
    ret[1] = data[lastIndex].children || [];

    if (cols === 3) {
      lastIndex = data.findIndex((d) => d.value === value[1]);
      lastIndex = lastIndex === -1 ? 0 : lastIndex;
      ret[2] = ret[1][lastIndex].children || [];
    }
  }

  return ret;
};

const Wheel = (props) => {
  const { onChange, data = [], listRef, value = [], valueIndex = 0, cols = 1 } = props;
  const elRef = useRef<HTMLElement>();

  const yRef = useRef(firstItemY);
  const thisRef = useThisRef({
    list: listRef.current,
    cols,
    data,
    onChange,
    value,
    valueIndex,
  });

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
    const v = thisRef.current;
    const i = v.data.findIndex((d) => d.value === v.value[v.valueIndex]);
    scrollToIndex(i > -1 ? i : 0);
  }, [scrollToIndex, thisRef]);

  const onTouchEnd = useCallback(() => {
    const v = thisRef.current;
    const list = v.data;
    const min = -1 * (list.length - 1) * itemHeight + firstItemY;
    const max = firstItemY;

    let index;
    if (yRef.current >= max - itemHeight / 2) {
      index = 0;
    } else if (yRef.current <= min) {
      index = v.data.length - 1;
    } else {
      index = getIndexByY();
    }
    scrollToIndex(index);
    v.value[v.valueIndex] = v.data[index]?.value;

    let vIndex = v.valueIndex + 1;
    while (vIndex <= v.cols - 1) {
      // next wheel refresh  & update value to next&first
      v.list[vIndex] = v.list[vIndex - 1][index]?.children || [];
      v.value[vIndex] = v.list[vIndex][0]?.value || '';
      vIndex++;
    }

    const cv = [...v.value];
    vIndex = v.valueIndex - 1;
    while (vIndex >= 0) {
      // prev wheel check
      if (typeof cv[vIndex] === 'undefined') {
        // left not scrolled
        cv[vIndex] = v.list[vIndex][0]?.value || '';
      }
      vIndex--;
    }

    v.onChange?.(cv);
  }, [getIndexByY, scrollToIndex, thisRef]);

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
      <div className="wrapper" style={{ width: 100 / cols + '%', touchAction: 'none' }}>
        {data.map((item) => (
          <div className="item" key={item.value}>
            {item.label}
          </div>
        ))}
      </div>
    </FingerGestureElement>
  );
};

/** picker 选择器 */
const Picker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    okText = '确定',
    cancelText = '取消',
    title = '请选择',
    onClose,
    visible,
    onOk,
    value = [],
    data = [],
    cols = 1,
    ...rest
  } = props;

  const listRef = useRef(getPickerMapData(data, cols, value));
  const [val, setVal] = useState(value);

  return (
    <Popup
      position="bottom"
      style={{
        width: '100%',
      }}
      visible={visible}
      onMaskClick={() => onClose?.()}
    >
      <StyledBar className="bar">
        <div className="cancel" onClick={onClose}>
          {cancelText}
        </div>
        <div className="title">{title}</div>
        <div
          className="ok"
          onClick={() => {
            if (listRef.current.length) {
              const cv = [...val];
              let i = cols - 1;
              while (i >= 0) {
                if (typeof cv[i] === 'undefined') {
                  cv[i] = listRef.current[i][val[i] || 0]?.value || '';
                }
                i--;
              }

              onOk?.(cv);
            } else {
              onOk?.([]);
            }

            onClose?.();
          }}
        >
          {okText}
        </div>
      </StyledBar>
      <StyledPicker ref={ref} {...rest} className={clsx('uc-picker')}>
        <div className="mask"></div>
        <div className="hairline"></div>
        <div className="columnitem">
          <div className="content">
            {listRef.current?.map((d, idx) => {
              return (
                <Wheel
                  cols={cols}
                  data={d}
                  key={idx === 0 ? 'first' : val?.[idx - 1] || idx}
                  value={val}
                  valueIndex={idx}
                  listRef={listRef}
                  onChange={setVal}
                />
              );
            })}
          </div>
        </div>
      </StyledPicker>
    </Popup>
  );
});

Picker.displayName = 'UC-Picker';

export default Picker;
