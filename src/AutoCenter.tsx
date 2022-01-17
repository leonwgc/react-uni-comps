import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

// refer: https://mobile.ant.design/zh/components/auto-center

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  .content {
    flex: 0 1 auto;
  }
`;

/** 自动居中 */
const AutoCenter = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <StyledWrap {...rest} ref={ref} className={clsx('uc-autocenter')}>
        <div className="content">{children}</div>
      </StyledWrap>
    );
  }
);

AutoCenter.displayName = 'UC-AutoCenter';

export default AutoCenter;
