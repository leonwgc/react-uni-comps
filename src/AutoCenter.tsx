import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  .content {
    flex: 0 1 auto;
  }
`;

/** 自动居中 */
const AutoCenter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <StyledWrap {...rest} ref={ref} className={clsx('uc-auto-center')}>
        <div className="content">{children}</div>
      </StyledWrap>
    );
  }
);

AutoCenter.displayName = 'UC-AutoCenter';

export default AutoCenter;
