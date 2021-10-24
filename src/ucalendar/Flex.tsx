import React, { HTMLAttributes } from 'react';

function toPercent(num) {
  return `${num}%`;
}

type Props = {
  children?: any;
  className?: string;
  direction?: any;
  count?: number;
  offset?: number;
  style?: any;
  wrap?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function Flex(props: Props): React.ReactElement {
  const { children, className, direction, count, offset, style, wrap, ...otherProps } = props;
  const st = {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'no-wrap',
    ...style,
  };
  return (
    <div className={className} style={st} {...otherProps}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ...child.props,
          style: {
            flexBasis: toPercent(100 / count),
            maxWidth: toPercent(100 / count),
            overflow: 'hidden',
            marginLeft: offset && index === 0 ? toPercent((100 * offset) / count) : null,
          },
        })
      )}
    </div>
  );
}
