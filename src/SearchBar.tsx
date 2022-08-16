import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import clsx from 'clsx';
import Input from './Input';
import type { Props as InputProps } from './Input';
import { prefixClassName } from './helper';

const getClassName = prefixClassName('uc-search-bar');

export type Props = {
  /**
   * 取消按钮文案
   * @default 取消
   *   */
  cancelText?: React.ReactNode;
  /** 点击取消按钮时触发  */
  onCancel?: () => void;
  /** Enter回调 */
  onSearch?: (v: string) => void;
} & Omit<InputProps, 'rows' | 'autoHeight'>;

//#region  style

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  .uc-input {
    flex: 1;
    background: #f7f7f7;
    border-radius: 16px;
    padding: 4px 12px;
    line-height: 24px;

    .prefix {
      .uc-icon {
        font-size: 1.143em;
        color: #8c8c8c;
      }
    }
  }
  .${getClassName('cancel')} {
    flex: none;
    display: inline-block;
    margin-left: 12px;
    cursor: pointer;
    user-select: none;
  }
`;
//#endregion

/** 搜索框 */
const SearchBar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    style,
    onChange,
    cancelText = '取消',
    onFocus,
    onCancel,
    onSearch,
    ...inputProps
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <StyledWrap ref={ref} style={style} className={clsx(getClassName(), className)}>
      <Input
        prefix={<Icon type="uc-icon-sousuo" />}
        onFocus={(e: any) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onChange={onChange}
        onPressEnter={onSearch}
        {...(inputProps as Props)}
      />
      {focused && cancelText && (
        <div
          className={getClassName('cancel')}
          onClick={() => {
            setFocused(false);
            onCancel?.();
            onChange?.('');
          }}
        >
          {cancelText}
        </div>
      )}
    </StyledWrap>
  );
});

SearchBar.displayName = 'UC-SearchBar';

export default SearchBar;
