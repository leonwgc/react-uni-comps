import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Icon from './Icon';
import clsx from 'clsx';
import Input from './Input';
import Button from './Button';
import useUpdateEffect from './hooks/useUpdateEffect';

export type Props = {
  /** 禁用 */
  disabled?: boolean;
  /** 值 */
  value?: number;
  /** 默认值 */
  defaultValue?: number;
  className?: string;
  style?: React.CSSProperties;
  /** 值变化时触发的回调函数 */
  onChange?: (value: number) => void;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 每次改变步数，可以为小数 */
  step?: number;
  /** 小数位数，默认0 */
  digits?: number;
};

//#region  style

const StyledWrap = styled.div`
  width: 110px;
  display: inline-flex;
  .uc-button {
    flex: none;
    width: 28px;
    height: 28px;
    padding: 0;
    background-color: #f5f5f5;
    border: none;
    font-weight: normal;
    ${getThemeColorCss('color')}
  }

  .uc-input {
    flex: 1;
    background-color: #f5f5f5;
    border: none;
    padding: 0;
    height: 28px;
    margin: 0 2px;

    input {
      text-align: center;
    }

    &:hover:not(.disabled, .read-only) {
      border: none;
    }

    &.focused:not(.disabled, .read-only) {
      border: none;
      box-shadow: none;
    }
  }
`;

//#endregion

const limit = (val: number, min, max, digits = 0) => {
  let v = val;
  if (typeof max === 'number') {
    v = Math.min(v, max);
  }
  if (typeof min === 'number') {
    v = Math.max(min, v);
  }

  return Number(v.toFixed(digits));
};

/** 步进器 */
const Stepper: React.FC<Props> = (props) => {
  const {
    className,
    style,
    defaultValue = '0',
    value,
    step = 1,
    min,
    max,
    disabled,
    onChange,
    digits,
    ...rest
  } = props;

  const [val, setVal] = useState(value || defaultValue);

  const onAdd = useCallback(() => {
    setVal((v) => {
      const n = Number(v) + step;
      return limit(n, min, max, digits);
    });
  }, [step, min, max, digits]);

  const onMinus = useCallback(() => {
    setVal((v) => {
      const n = Number(v) - step;
      return limit(n, min, max, digits);
    });
  }, [step, min, max, digits]);

  useUpdateEffect(() => {
    onChange?.(Number(val));
  }, [val]);

  useUpdateEffect(() => {
    if (value != val) {
      setVal(value);
    }
  }, [value]);

  return (
    <StyledWrap {...rest} style={style} className={clsx('uc-stepper', className)}>
      <Button icon={<Icon type="uc-icon-jian2" />} onClick={onMinus} disabled={disabled}></Button>
      <Input
        {...rest}
        disabled={disabled}
        value={val + ''}
        onChange={(v) => {
          const num = Number(v);
          if (num === num) {
            setVal(v);
          }
        }}
        onBlur={() => {
          setVal(limit(Number(val), min, max, digits));
        }}
      />
      <Button icon={<Icon type="uc-icon-jia2" />} onClick={onAdd} disabled={disabled}></Button>
    </StyledWrap>
  );
};

Stepper.displayName = 'UC-Stepper';

export default Stepper;
