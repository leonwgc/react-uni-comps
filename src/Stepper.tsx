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
    ...rest
  } = props;

  const [val, setVal] = useState(value || defaultValue);

  const onAdd = useCallback(() => {
    setVal((v) => {
      const n = Number(v) + step;
      if (typeof max === 'number') {
        return Math.min(n, max);
      }
      return n;
    });
  }, [step, max]);

  const onMinus = useCallback(() => {
    setVal((v) => {
      const n = Number(v) - step;

      if (typeof min === 'number') {
        return Math.max(min, n);
      }

      return n;
    });
  }, [step, min]);

  useUpdateEffect(() => {
    onChange?.(Number(val));
  }, [val]);

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
            setVal(v + ''); // v maybe ''
          }
        }}
      />
      <Button icon={<Icon type="uc-icon-jia2" />} onClick={onAdd} disabled={disabled}></Button>
    </StyledWrap>
  );
};

Stepper.displayName = 'UC-Stepper';

export default Stepper;
