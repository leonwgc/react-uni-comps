import React, { useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Drawer from './Drawer';
import Wheel from './Wheel';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';

//#region def

export type DataItem = {
  /** 数据显示文本 */
  label: string;
  /** 数据值 */
  value: string | number;
  /** 级联数据用children */
  children?: DataItem[];
};

type Props = {
  /** 列数，最多3列,默认1 */
  cols?: 1 | 2 | 3;
  /** 数据 */
  data?: DataItem[] | DataItem[][];
  /** 值 */
  value?: Array<string | number>;
  /** 关闭回调 */
  onClose?: () => void;
  /** 点击确定回调 */
  onOk?: (value: Array<string | number>) => void;
  /** 是否显示 */
  visible?: boolean;
  /** 确定文本 */
  okText?: React.ReactNode;
  /** 中间标题 */
  title?: React.ReactNode;
  /** 取消文本 */
  cancelText?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** 滚动变化回调 */
  onWheelChange?: (index: number, wheelIndex: number) => void;
};

const StyledDrawer = styled(Drawer)`
  .header {
    display: flex;
    height: 45px;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background-color: #f7f7f7;
    font-size: 16px;
    touch-action: none;
    user-select: none;

    .ok-text {
      ${getThemeColorCss('color')}
    }
    .cancel-text {
      color: #999;
    }
    .title {
      color: #333;
    }
  }
  .picker-wrap {
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

      .wheel-wrap {
        display: flex;
        position: relative;
        text-align: center;
        overflow-y: hidden;
        height: 100%;
      }
    }
  }
`;

//#endregion

/**
 *  convert data to 2 dimension array ;
 *
 * @param {DataItem[]} data
 * @param {number} [cols=1]
 * @param {*} [value=[]]
 * @return {*}
 */
const convertPickerData = (data: DataItem[] | DataItem[][], cols = 1, value = []) => {
  const ret = [];
  for (let i = 0; i < cols; i++) {
    ret.push([]);
  }

  data?.map((d) => {
    ret[0].push(d);
  });

  if (cols > 1) {
    if (!Array.isArray(data[0])) {
      // linked
      let lastIndex = data.findIndex((d) => d.value === value[0]);
      lastIndex = lastIndex === -1 ? 0 : lastIndex;
      ret[1] = (data[lastIndex] as DataItem).children || [];

      if (cols === 3) {
        lastIndex = data.findIndex((d) => d.value === value[1]);
        lastIndex = lastIndex === -1 ? 0 : lastIndex;
        ret[2] = ret[1][lastIndex].children || [];
      }
    } else {
      // unlinked
      for (let i = 0; i < cols; i++) {
        ret[i] = data[i];
      }
    }
  }
  return ret;
};

const getIndexArrayFromValue = (value = [], list, cols = 1) => {
  const ar = new Array(cols).fill(0);
  if (list.length > 0 && value.length > 0) {
    list.map((e, i) => {
      const index = list[i].findIndex((e) => e.value === value[i]);
      ar[i] = index === -1 ? 0 : index;
    });
  }
  return ar;
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
    className,
    onWheelChange,
    value = [],
    data = [],
    cols = 1,
    ...rest
  } = props;

  // 非级联
  const isUnLinked = data?.length > 0 && Array.isArray(data[0]);

  const [list, setList] = useState(() => {
    return convertPickerData(data, cols, value);
  });

  const [indexArr, setIndexArr] = useState(() => getIndexArrayFromValue(value, list, cols));

  useUpdateEffect(() => {
    setList(convertPickerData(data, cols, value));
  }, [data]);

  useUpdateEffect(() => {
    setIndexArr(getIndexArrayFromValue(value, list, cols));
  }, [value]);

  return (
    <StyledDrawer
      {...rest}
      className={clsx('uc-picker', className)}
      position="bottom"
      visible={visible}
      onClose={onClose}
      header={
        <>
          <div className="cancel-text" onClick={onClose}>
            {cancelText}
          </div>
          <div className="title">{title}</div>
          <div
            className="ok-text"
            onClick={() => {
              if (list.length && indexArr.length) {
                onOk?.(list.map((e, i) => e[indexArr[i]].value));
              } else {
                onOk?.([]);
              }
              onClose?.();
            }}
          >
            {okText}
          </div>
        </>
      }
    >
      <div className="picker-wrap" ref={ref}>
        <div className="mask"></div>
        <div className="hairline"></div>
        <div className="columnitem">
          <div className="wheel-wrap">
            {list?.map((listItem, idx) => {
              return (
                <Wheel
                  data={listItem}
                  key={idx}
                  index={indexArr[idx]}
                  onIndexChange={(index) => {
                    indexArr[idx] = index;

                    let nextIndex = idx + 1;

                    if (nextIndex <= cols - 1) {
                      while (nextIndex <= cols - 1) {
                        // next wheel refresh  & update value to next&first
                        if (!isUnLinked) {
                          // linked
                          list[nextIndex] =
                            list[nextIndex - 1][indexArr[nextIndex - 1]]?.children || [];

                          indexArr[nextIndex] = 0;
                        }
                        nextIndex++;
                      }
                      setList([...list]);
                      setIndexArr([...indexArr]);
                    }

                    onWheelChange?.(index, idx);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </StyledDrawer>
  );
});

Picker.displayName = 'UC-Picker';

export default Picker;
