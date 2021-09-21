import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledSpanMultiLines = styled.span<{ lines?: number }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.lines};
  overflow: hidden;
`;

const StyledSpanOneline = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Props = {
  /** 显示几行，超过显示省略号, 默认1 */
  lines?: number;
  /** 包裹的文本 */
  children?: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
const Text = React.forwardRef<HTMLSpanElement, Props>((props: Props, ref) => {
  const { lines = 1, children, ...rest } = props;

  if (typeof children !== 'string' || typeof lines !== 'number') {
    return <span ref={ref}>{children}</span>;
  }

  return React.createElement(
    lines > 1 ? StyledSpanMultiLines : StyledSpanOneline,
    {
      ...rest,
      ref,
      lines,
    },
    children
  );
});

Text.displayName = 'UC-Text';

export default Text;
