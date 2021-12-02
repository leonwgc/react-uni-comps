import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Drawer from './Drawer';
import Wheel from './picker/Wheel';
import clsx from 'clsx';

//#region def

type DataItem = {
  /** 数据显示文本 */
  label: string;
  /** 数据值 */
  value: string;
  /** 级联数据用children */
  children?: DataItem[];
};

type Props = {
  /** 列数，最多3列,默认1 */
  cols?: 1 | 2 | 3;
  /** 数据 */
  data: DataItem[];
  /** 值 */
  value?: string[];
  /** 关闭回调 */
  onClose: () => void;
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
  onWheelChange?: (val: unknown, index: number) => void;
};

const StyledDrawer = styled(Drawer)`
  .header {
    display: flex;
    height: 45px;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    background-color: #f7f7f7;
    font-size: 16px;
    touch-action: none;

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

      .wheel {
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
            font-size: 18px;
            color: #333;
          }
        }
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
const convertPickerData = (data: DataItem[], cols = 1, value = []) => {
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
      ret[1] = data[lastIndex].children || [];

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

  // 是否非级联
  const isUnLinked = data?.length > 0 && Array.isArray(data[0]);

  const list = useMemo(() => {
    return convertPickerData(data, cols, value);
  }, [data, cols, value]);

  const [val, setVal] = useState<Array<string | number>>(value || []);

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
              if (list.length) {
                const newVal = [...val];
                let i = cols - 1;
                while (i >= 0) {
                  if (typeof newVal[i] === 'undefined') {
                    newVal[i] = list[i][val[i] || 0]?.value || '';
                  }
                  i--;
                }

                onOk?.(newVal);
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
          <div className="wheel">
            {list?.map((listItem, idx) => {
              return (
                <Wheel
                  data={listItem}
                  key={idx}
                  value={val[idx]}
                  onChange={(v, index) => {
                    val[idx] = v;

                    let nextIndex = idx + 1;
                    while (nextIndex <= cols - 1) {
                      // next wheel refresh  & update value to next&first
                      if (!isUnLinked) {
                        list[nextIndex] = list[nextIndex - 1][index]?.children || [];
                        value[nextIndex] = list[nextIndex][0]?.value || '';
                      }
                      nextIndex++;
                    }

                    const newVal = [...val];
                    nextIndex = idx - 1;
                    while (nextIndex >= 0) {
                      // prev wheel check
                      if (typeof newVal[nextIndex] === 'undefined') {
                        // left not scrolled
                        newVal[nextIndex] = list[nextIndex][0]?.value || '';
                      }
                      nextIndex--;
                    }

                    setVal(newVal);
                    onWheelChange?.(v, index);
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
