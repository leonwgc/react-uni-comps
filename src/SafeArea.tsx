import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { prefixClassName } from './helper';

const getClassName = prefixClassName('uc-safe-area');

const StyledWrap = styled.div`
  display: block;
  width: 100%;

  &.${getClassName('top')} {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }

  &.${getClassName('bottom')} {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

type Props = {
  /**
   * 安全区的位置
   * @default bottom
   * */
  position?: 'top' | 'bottom';
} & React.HTMLAttributes<HTMLDivElement>;

/** 安全区 */
const SafeArea = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { position = 'bottom', className, children, ...rest } = props;

  return (
    <StyledWrap
      ref={ref}
      {...rest}
      className={clsx(getClassName(), getClassName(position), className)}
    >
      {children}
    </StyledWrap>
  );
});

SafeArea.displayName = 'UC-SafeArea';

export default SafeArea;
