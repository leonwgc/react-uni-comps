import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as colors from './colors';
import clsx from 'clsx';
import useValueRef from './hooks/useValueRef';
import useUpdateEffect from './hooks/useUpdateEffect';
import Button from './Button';
import IconCross from './IconCross';

type Props = {
  value?: string;
  onFinish?: (v: string) => void;
  length?: number;
  mask?: boolean;
  style?: React.CSSProperties;
  className?: string;
  autoFocus?: boolean;
  closable?: boolean;
};

const StyledPasswordInput = styled.div`
  user-select: none;
  height: 50px;
  cursor: pointer;
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid ${colors.border};
  margin: 0 16px;

  .item {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 20px;
    line-height: 1.2;
    background-color: #fff;

    &:not(:first-child) {
      border-left: 1px solid ${colors.border};
    }

    .dot {
      width: 10px;
      height: 10px;
      background-color: #000;
      border-radius: 100%;
    }
    input {
      height: 100%;
      width: 100%;
      display: inline-block;
      font-size: 16px;
      text-align: center;
      background-color: transparent;
      border: 0;
      resize: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-appearance: none;
      box-shadow: none;
    }
  }
`;

const getArray = (len: number) => {
  const ar = [];
  for (let i = 0; i < len; i++) {
    ar.push(i + 1);
  }
  return ar;
};

/** 密码输入框 */
const PasswordInput = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    value = '',
    length = 6,
    className,
    mask = true,
    autoFocus = true,
    onFinish,
    closable,
    ...rest
  } = props;
  const [v, setV] = useState(value);

  const arRef = useRef<Array<number>>(getArray(length));
  const inputRefArray = useRef<Array<HTMLInputElement>>([]);

  const autoFocusRef = useValueRef(autoFocus);
  const vRef = useValueRef(v);
  const onFinishRef = useValueRef(onFinish);

  useUpdateEffect(() => {
    setV(value);
    if (value.length === length) {
      onFinishRef.current?.(value);
    }
  }, [value, onFinishRef, length]);

  useEffect(() => {
    if (autoFocusRef.current) {
      inputRefArray.current[vRef.current.length].focus?.();
    }
  }, [autoFocusRef, vRef]);

  return (
    <StyledPasswordInput ref={ref} {...rest} className={clsx('uc-password-input', className)}>
      {arRef.current.map((n, idx) => (
        <div className={clsx('item')} key={n}>
          {v.length >= n ? (
            mask ? (
              <div className="dot" />
            ) : (
              v[idx]
            )
          ) : (
            <input
              ref={(r) => {
                inputRefArray.current[idx] = r;
              }}
              onChange={(e) => {
                const newValue = v.slice(0, idx) + e.target.value;
                setV(newValue);
                if (n < length) {
                  inputRefArray.current[idx + 1]?.focus();
                } else {
                  // done
                  onFinish?.(newValue);
                }
              }}
            />
          )}
        </div>
      ))}
      {closable && v.length === length && (
        <Button circle icon={<IconCross />} onClick={() => setV('')}></Button>
      )}
    </StyledPasswordInput>
  );
});

PasswordInput.displayName = 'UC-PasswordInput';

export default PasswordInput;
