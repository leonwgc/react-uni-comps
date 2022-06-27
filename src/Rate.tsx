import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useLatest from './hooks/useLatest';
import useUpdateEffect from './hooks/useUpdateEffect';

const StyledRate = styled.div<{ $color: string }>`
  display: inline-flex;
  .box {
    position: relative;
  }

  .char {
    padding: calc(24px / 8);
    line-height: 24px;
    font-size: 24px;
    color: #ccc;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    &.half {
      padding-right: 0;
      width: 50%;
      position: absolute;
      left: 0;
      top: 0;
    }
    &.active {
      color: ${(props) => props.$color};
    }
    &.readonly {
      cursor: unset;
    }
  }
`;

type Props = {
  /**
   * 是否允许再次点击后清除
   * @default true
   */
  allowClear?: boolean;
  /**是否允许半选 */
  allowHalf?: boolean;
  /** 自定义字符 */
  char?: React.ReactNode;
  /**
   * star总数
   * @default 5
   *    */
  count?: number;
  /** 默认数，非受控 */
  defaultValue?: number;
  /**只读 */
  readonly?: boolean;
  /** 当前数，受控 */
  value?: number;
  /** 评分回调 */
  onChange?: (value: number) => void;

  /**
   * 评分颜色
   * @default #ffd21e
   *   */
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const defaultChar = (
  <svg viewBox="64 64 896 896" data-icon="star" width="1em" height="1em" fill="currentColor">
    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
  </svg>
);

/** 评分 */
const Rate = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const {
    value,
    defaultValue = 0,
    allowHalf = false,
    readonly,
    count = 5,
    char = defaultChar,
    onChange,
    className,
    color = '#ffd21e',
    allowClear = true,
    ...rest
  } = props;

  const [val, setVal] = useState(typeof value === 'number' ? value : defaultValue);
  const starList = Array(count).fill(null);

  const onChangeRef = useLatest(onChange);

  useUpdateEffect(() => {
    onChangeRef.current?.(val);
  }, [val]);

  useUpdateEffect(() => {
    if (val !== value) {
      setVal(value);
    }
  }, [value]);

  const renderChar = useCallback(
    (v: number, val, half) => {
      return (
        <div
          className={clsx(`char`, {
            active: val >= v,
            half,
            readonly: readonly,
          })}
          onClick={() => {
            if (readonly) return;
            if (allowClear && val === v) {
              setVal(0);
            } else {
              setVal(v);
            }
          }}
        >
          {char}
        </div>
      );
    },
    [allowClear, char, readonly]
  );
  return (
    <StyledRate {...rest} ref={ref} className={clsx(className)} $color={color}>
      {starList.map((_, i) => (
        <div key={i} className={clsx(`box`)}>
          {allowHalf && renderChar(i + 0.5, val, true)}
          {renderChar(i + 1, val, false)}
        </div>
      ))}
    </StyledRate>
  );
});

Rate.displayName = 'UC-Rate';

export default Rate;
