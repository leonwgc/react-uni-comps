import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { useRef } from 'react';

export type Props = {
  accept?: string;
  onChange?: (files: FileList) => void;
  disabled?: false;
  multiple?: false;
  capture?: 'user' | 'environment';
  style?: React.CSSProperties;
  className?: string;
} & React.HTMLAttributes<HTMLInputElement>;

const StyledFileInputTrigger = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

/** input file trigger */
const FileInputTrigger = (props: Props): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>();
  const { onChange, disabled, multiple, accept, capture, children, className, ...rest } = props;

  return (
    <StyledFileInputTrigger
      onClick={() => {
        inputRef.current.value = '';
        inputRef.current.click();
      }}
      className={clsx('uc-file-input-trigger', className, { disabled: disabled })}
      {...rest}
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
};

export default FileInputTrigger;