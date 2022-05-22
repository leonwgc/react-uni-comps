import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 宽高比
   * @default 4/3
   *  */
  ratio?: number;
};

const StyledWrap = styled.div<{ ratio: number }>`
  position: relative;

  &::before {
    height: 0;
    content: '';
    display: block;
    padding-bottom: ${(props) => (1 * 100) / props.ratio + '%'};
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  * {
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;
    inset: 0px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

/** 宽高比 */
const AspectRatio = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, ratio = 4 / 3, ...rest } = props;
  return (
    <StyledWrap {...rest} ref={ref} ratio={ratio} className={clsx('ruc-aspect-ratio', className)}>
      {children}
    </StyledWrap>
  );
});

AspectRatio.displayName = 'UC-AutoCenter';

export default AspectRatio;
