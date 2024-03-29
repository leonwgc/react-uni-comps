import React, { useState, useRef, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Drawer from './Drawer';
import clsx from 'clsx';
import PickerView from './PickerView';
import useLatest from './hooks/useLatest';
import type { StringOrNumber } from './types';
import useUpdateEffect from './hooks/useUpdateEffect';
import type { Props as PickerviewProps, PickerViewRefType } from './PickerView';
import usePrevious from './hooks/usePrevious';

//#region def

export type Props = PickerviewProps & {
  /** 关闭回调 */
  onClose?: () => void;
  /** 点击确定回调 */
  onOk?: (value: Array<StringOrNumber>) => void;
  /** 是否显示 */
  visible?: boolean;
  /**
   * 确定文本
   * @default 确定
   *  */
  okText?: React.ReactNode;
  /**
   * 中间标题
   * @default 请选择
   *  */
  title?: React.ReactNode;
  /**
   * 取消文本
   * @default 取消
   *  */
  cancelText?: React.ReactNode;
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
`;

const isSameArr = (ar1: StringOrNumber[], ar2: StringOrNumber[]) => {
  if (ar1.length !== ar2.length) {
    return false;
  }

  for (const item of ar1) {
    if (!ar2.includes(item)) {
      return false;
    }
  }

  return true;
};

//#endregion

/** picker 下方弹出选择器 */
const Picker = React.forwardRef<PickerViewRefType, Props>((props, ref) => {
  const {
    okText = '确定',
    cancelText = '取消',
    title = '请选择',
    onClose,
    visible,
    onOk,
    onChange,
    onWheelChange,
    itemHeight = 35,
    labelRender,
    className,
    value = [],
    data = [],
    ...rest
  } = props;

  const pickerViewRef = useRef<PickerViewRefType>();
  useImperativeHandle(ref, () => pickerViewRef.current);
  const [val, setVal] = useState(value);

  const onChangeRef = useLatest(onChange);

  const onValueChange = useCallback((value) => {
    setVal(value);
    onChangeRef.current?.(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prevValue = usePrevious(value);

  useUpdateEffect(() => {
    if (!isSameArr(value, prevValue)) {
      onValueChange(value);
    }
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
              onOk?.(pickerViewRef.current.getValue());
              onClose?.();
            }}
          >
            {okText}
          </div>
        </>
      }
    >
      <PickerView
        labelRender={labelRender}
        itemHeight={itemHeight}
        ref={pickerViewRef}
        data={data}
        value={val}
        onChange={onValueChange}
        onWheelChange={onWheelChange}
      />
    </StyledDrawer>
  );
});

Picker.displayName = 'UC-Picker';

export default Picker;
