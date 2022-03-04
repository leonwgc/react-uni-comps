import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import clsx from 'clsx';
import Input from './Input';

type ignoredEvt = 'prefix' | 'onChange' | 'onFocus' | 'onBlur';

export type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, ignoredEvt> & {
  value?: string;
  /** 默认值 */
  defaultValue?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 值变化时触发的回调函数 */
  onChange?: (value: string) => void;
  /** focus事件回调 */
  onFocus?: (e: FocusEvent) => void;
  /** blur事件回调 */
  onBlur?: (e: FocusEvent) => void;
  /** 处理IME输入法,默认 false */
  ime?: boolean;
  /** 是否显示清除按钮,默认false*/
  clearable?: boolean;
  /** 点击清除按钮后触发 */
  onClear?: () => void;
  /** Enter回调 */
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /** 取消按钮的文案,默认 取消  */
  cancelText?: React.ReactNode;
  /** 点击取消按钮时触发  */
  onCancel?: () => void;
};

//#region  style

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  .uc-input {
    height: 30px;
    flex: 1;
    background: #f7f7f7;
    border-radius: 16px;
    padding: 0 8px;

    .uc-icon {
      color: #999;
      font-size: 15px;
    }
  }
  .cancel-text {
    flex: none;
    display: inline-block;
    margin-left: 12px;
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
    ...inputProps
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <StyledWrap ref={ref} style={style} className={clsx('uc-search-bar', className)}>
      <Input
        prefix={<Icon type="uc-icon-sousuo" />}
        onFocus={(e: any) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onChange={onChange}
        {...inputProps}
      />
      {focused && (
        <div
          className="cancel-text"
          style={{ marginLeft: 12 }}
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
