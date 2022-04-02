import React, { useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import Wheel from './Wheel';
import type { DataItem } from './Wheel';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
import useForceUpdate from './hooks/useForceUpdate';
import { isObject } from './helper';
import type { StringOrNumber, BaseProps } from './types';

//#region def

//#region type & helper

type SimpleDatas = StringOrNumber[];
type ObjectDatas = DataItem[] | DataItem[][];

export type DataType = ObjectDatas | SimpleDatas;

type Props = BaseProps & {
  /** 数据 */
  data?: DataType;
  /** 值 */
  value?: Array<StringOrNumber>;
  /** 值改变回调 */
  onChange?: (value: Array<StringOrNumber>) => void;
  /** 元素高度，默认 35 */
  itemHeight?: number;
  /** 滚动变化回调 */
  onWheelChange?: (index: number, wheelIndex: number) => void;
  /** 自定义label */
  labelRender?: (item: DataItem) => React.ReactNode;
};

const StyledWrap = styled.div<{ itemHeight: number }>`
  display: flex;
  position: relative;
  background-color: #fff;
  height: ${(props) => props.itemHeight * 7}px;
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
    background-size: 100% ${(props) => props.itemHeight * 3}px;
  }

  .hairline {
    position: absolute;
    height: ${(props) => props.itemHeight}px;
    width: 100%;
    border-left: 0;
    border-right: 0;
    top: ${(props) => props.itemHeight * 3}px;

    &:after {
      content: '';
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-top: 1px solid #d8d8d8;
      border-bottom: 1px solid #d8d8d8;

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        width: 200%;
        height: 200%;
        transform: scale(0.5);
        transform-origin: 0 0;
      }
    }
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
`;

/**
 *  convert data to 2 dimension array ;
 *
 * @param {DataItem[]} data
 * @param {number} [cols=1]
 * @param {*} [value=[]]
 * @return {*}
 */
const convertPickerData = (data: ObjectDatas, cols = 1, value = []) => {
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

export interface PickerViewRefType {
  getValue: () => Array<StringOrNumber>;
}

const formatSimpleData = (arr: string[] | number[] = []) => {
  return arr.map((i) => ({ label: i, value: i }));
};

//#endregion

/** 平铺选择器 */
const PickerView = React.forwardRef<PickerViewRefType, Props>((props, ref) => {
  const {
    className,
    onChange,
    onWheelChange,
    itemHeight = 35,
    labelRender,
    value = [],
    data = [],
    ...rest
  } = props;

  let cols = 1;

  let cdata = data || [];

  // 非级联
  let isUnLinked = true;

  if (!cdata?.length) {
    cols = 1;
  } else {
    const firstItem = cdata[0];

    if (Array.isArray(firstItem)) {
      // 非级联
      isUnLinked = true;
      cols = cdata.length;
    } else if (!isObject(firstItem)) {
      cdata = formatSimpleData(cdata as string[] | number[]) as DataItem[];
    } else {
      let c = 1;
      let t = firstItem as DataItem;
      while (Array.isArray(t.children)) {
        if (isUnLinked) {
          isUnLinked = false;
        }
        // linked
        c++;
        t = t.children[0];
      }
      cols = c;
    }
  }

  const forceUpdate = useForceUpdate();

  const listRef = useRef(convertPickerData(cdata as ObjectDatas, cols, value));
  const indexArrRef = useRef(getIndexArrayFromValue(value, listRef.current, cols));

  useImperativeHandle(ref, () => ({
    getValue: () => listRef.current.map((e, i) => e[indexArrRef.current[i]].value),
  }));

  useUpdateEffect(() => {
    const list = convertPickerData(cdata as ObjectDatas, cols, value);
    listRef.current = list;
    indexArrRef.current = getIndexArrayFromValue(value, list, cols);
    forceUpdate();
  }, [data]);

  return (
    <StyledWrap {...rest} className={clsx('uc-pickerview', className)} itemHeight={itemHeight}>
      <div className="mask"></div>
      <div className="hairline"></div>
      <div className="columnitem">
        <div className="wheel-wrap">
          {listRef.current?.map((listItem, idx) => {
            return (
              <Wheel
                labelRender={labelRender}
                itemHeight={itemHeight}
                data={listItem}
                key={idx}
                style={{ width: `${100 / cols}%` }}
                index={indexArrRef.current[idx]}
                onIndexChange={(index) => {
                  indexArrRef.current[idx] = index;

                  let nextIndex = idx + 1;

                  if (nextIndex <= cols - 1) {
                    while (nextIndex <= cols - 1) {
                      // next wheel refresh  & update value to next&first
                      if (!isUnLinked) {
                        // linked
                        listRef.current[nextIndex] =
                          listRef.current[nextIndex - 1][indexArrRef.current[nextIndex - 1]]
                            ?.children || [];

                        if (
                          (!indexArrRef.current[nextIndex] ||
                            indexArrRef.current[nextIndex] === -1) &&
                          indexArrRef.current[nextIndex] < listRef.current[nextIndex]?.length
                        ) {
                          indexArrRef.current[nextIndex] = 0;
                        }
                      }
                      nextIndex++;
                    }

                    listRef.current = [...listRef.current];
                    indexArrRef.current = [...indexArrRef.current];
                    forceUpdate();
                  }

                  onChange?.(
                    listRef.current.map((e, i) => {
                      let index = indexArrRef.current[i];
                      if (index > e?.length - 1) {
                        index = 0;
                      }
                      return e[index]?.value;
                    })
                  );
                  onWheelChange?.(index, idx);
                }}
              />
            );
          })}
        </div>
      </div>
    </StyledWrap>
  );
});

PickerView.displayName = 'UC-PickerView';

export default PickerView;
