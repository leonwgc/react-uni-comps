import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledMultiLines = styled.div<{ lines?: number }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.lines};
  overflow: hidden;
`;

const StyledLine = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Props = {
  /** 显示几行，超过显示省略号, 默认1 */
  lines?: number;
  /** 包裹的内容 */
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
const Text = React.forwardRef<HTMLSpanElement, Props>((props: Props, ref) => {
  const { lines = 1, children, ...rest } = props;

  return React.createElement(
    lines > 1 ? StyledMultiLines : StyledLine,
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
