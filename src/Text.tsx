import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledMultiLines = styled.div<{ $lines?: number }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.$lines};
  overflow: hidden;
`;

const StyledLine = styled.div<{ $lines?: number }>`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Props = {
  /**
   * 超过几行显示省略号
   * @default 1
   */
  lines?: number;
} & React.HTMLAttributes<HTMLDivElement>;

/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
const Text = React.forwardRef<any, Props>((props: Props, ref) => {
  const { lines = 1, children, className, ...rest } = props;

  return React.createElement(
    lines > 1 ? StyledMultiLines : StyledLine,
    {
      ...rest,
      className: clsx('uc-text', className),
      ref,
      $lines: lines,
    },
    children
  );
});

Text.displayName = 'UC-Text';

export default Text;
