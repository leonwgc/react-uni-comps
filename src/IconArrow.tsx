import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

type Props = {
  style?: React.CSSProperties;
  className?: string;
  /** 箭头方向，默认朝下 */
  direction: 'right' | 'bottom' | 'left' | 'top';
} & HTMLAttributes<HTMLDivElement>;

const StyledArrow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  &.right {
    svg {
      transform: rotate(-90deg);
    }
  }

  &.left {
    svg {
      transform: rotate(90deg);
    }
  }
  &.top {
    svg {
      transform: rotate(-180deg);
    }
  }

  &.bottom {
  }
`;

const SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
};

/** 箭头 */
const IconArrow = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { direction = 'bottom', className, ...rest } = props;

  return (
    <StyledArrow
      {...rest}
      ref={ref}
      className={clsx('uc-icon-arrow', className, { [direction]: direction })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...SVGProps}>
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </StyledArrow>
  );
});

IconArrow.displayName = 'UC-IconArrow';

export default IconArrow;
