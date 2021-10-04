import React from 'react';
import styled, { useTheme } from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';

type Props = {
  /** 进度条颜色,默认读主题色 */
  color?: string;
  /** 当前进度 0~100 */
  progress?: number;
  /** 圆弧的宽度，默认 10 */
  strokeWidth?: number;
  /** 圆弧末尾使用的形状,默认 round */
  strokeLinecap?: 'butt' | 'round';
  /** 环中间的内容，比如显示文本等 */
  children?: React.ReactNode;
  /** 环的直径,默认120 */
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

const StyledProgressCircle = styled.div`
  position: relative;
  .child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

/** 环形进度条 */
const ProgressCircle = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    progress = 0,
    strokeLinecap = 'round',
    strokeWidth = 10,
    size = 120,
    className,
    style,
    ...rest
  } = props;
  const theme = useTheme() as Record<string, unknown>;
  const color = (props.color || theme.color || colors.primary) as string;

  return (
    <StyledProgressCircle
      className={clsx(className, 'uc-progress-circle')}
      style={{ ...style, width: size, height: size }}
      {...rest}
      ref={ref}
    >
      <svg height={size} width={size} viewBox="0 0 120 120" x-mlns="http://www.w3.org/200/svg">
        <circle
          r="50"
          cx="60"
          cy="60"
          stroke="#d9d9d9"
          strokeWidth={strokeWidth}
          fill="none"
        ></circle>
        {progress > 0 ? (
          <circle
            r="50"
            cx="60"
            cy="60"
            stroke={color}
            strokeDasharray={`${(progress * 314) / 100},314`}
            strokeWidth={strokeWidth}
            fill="none"
            transform="rotate(-90,60,60)"
            strokeLinecap={strokeLinecap}
            style={{ transition: `stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s` }}
          ></circle>
        ) : null}
      </svg>
      {children && <div className="child">{children}</div>}
    </StyledProgressCircle>
  );
});

ProgressCircle.displayName = 'UC-ProgressCircle';

export default ProgressCircle;
