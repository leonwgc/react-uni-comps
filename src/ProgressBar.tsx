import React from 'react';
import { useTheme } from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import type { BaseProps } from './types';

type Props = {
  /**
   *
   * 进度百分比（范围：0 ～ 100）
   * @default 0
   */
  percent?: number;
  /**
   * 线条高度
   * @default 4
   */
  height?: number;
  /**
   * 轨道颜色
   * @default #e5e5e5
   */
  trackColor?: string;
  /** 填充的颜色，默认主题色*/
  fillColor?: string;
} & BaseProps;

/** 进度条 */
const ProgressBar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    trackColor = '#e5e5e5',
    fillColor,
    height = 4,
    percent = 0,
    className,
    style,
    ...rest
  } = props;
  const theme = (useTheme() as Record<string, unknown>) || {};
  const color = (theme.color || vars.primary) as string;

  return (
    <div
      {...rest}
      ref={ref}
      className={clsx('uc-progress-bar', className)}
      style={{ height, backgroundColor: trackColor, overflow: 'hidden', ...style }}
    >
      <div
        className={clsx(`path`)}
        style={{
          height: '100%',
          width: `${percent}%`,
          background: fillColor || color,
          transition: `width ${vars.animationSlow}ms ease-in-out`,
        }}
      />
    </div>
  );
});

ProgressBar.displayName = 'UC-ProgressBar';

export default ProgressBar;
