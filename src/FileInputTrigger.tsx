import React, { useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import type { BaseProps } from './types';

type Props = {
  /** 允许上传的文件格式 */
  accept?: string;
  /** 值变化时触发的回调函数 */
  onChange?: (files: FileList) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 布尔值，如果出现，则表示用户可以选择多个文件 */
  multiple?: boolean;
  /** 捕获图像或视频数据的源 */
  capture?: 'user' | 'environment';
} & Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> &
  BaseProps;

const StyledFileInputTrigger = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

/** 触发文件上传 */
const FileInputTrigger = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>();
  const { onChange, disabled, multiple, accept, capture, children, className, ...rest } = props;

  useImperativeHandle(ref, () => inputRef.current);

  return (
    <StyledFileInputTrigger
      {...rest}
      onClick={() => {
        inputRef.current.value = '';
        inputRef.current.click();
      }}
      className={clsx('uc-file-input-trigger', className, { disabled: disabled })}
    >
      <input
        style={{ display: 'none' }}
        type="file"
        ref={inputRef}
        accept={accept}
        multiple={multiple}
        capture={capture}
        disabled={disabled}
        onChange={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (e.target.files && typeof onChange === 'function') {
            onChange(e.target.files);
          }
        }}
      />
      {children}
    </StyledFileInputTrigger>
  );
});

FileInputTrigger.displayName = 'UC-FileInputTrigger';

export default FileInputTrigger;
