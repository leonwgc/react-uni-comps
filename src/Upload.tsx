import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { useRef } from 'react';

export type Props = {
  accept?: string;
  onChange: (files: FileList) => void;
  disabled: false;
  multiple: false;
  style?: React.CSSProperties;
  className?: string;
} & React.HTMLAttributes<HTMLInputElement>;

const StyledUploadContainer = styled.div`
  position: relative;

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }
`;

/** file upload */
const Upload = (props: Props): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>();
  const { onChange, disabled, multiple, accept, children, className, ...rest } = props;

  return (
    <StyledUploadContainer
      onClick={() => {
        inputRef.current.value = '';
        inputRef.current.click();
      }}
      className={clsx(className, { disabled: disabled })}
      {...rest}
    >
      <input
        style={{ display: 'none' }}
        type="file"
        ref={inputRef}
        accept={accept}
        multiple={multiple}
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
    </StyledUploadContainer>
  );
};

export default Upload;
