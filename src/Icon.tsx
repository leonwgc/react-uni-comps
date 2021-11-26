import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { loadResource, isBrowser } from './dom';
import clsx from 'clsx';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  /** 图标类型 */
  type: string;
} & HTMLAttributes<HTMLSpanElement>;

const StyledIcon = styled.span`
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
};

/** 图标 */
const Icon: React.ForwardRefExoticComponent<Props> & {
  /**
   * 加载在 iconfont.cn 上自行管理的图标
   *
   * @param {string} scriptUrl
   */
  loadFromIconfontCN?: (scriptUrl: string) => void;
} = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { type, className, ...rest } = props;

  return (
    <StyledIcon {...rest} ref={ref} className={clsx('uc-icon', className, type)}>
      <svg {...SVGProps}>
        <use xlinkHref={`#${type}`} />
      </svg>
    </StyledIcon>
  );
});

Icon.displayName = 'UC-Icon';
/**
 * 加载iconfont.cn图标
 *
 * @param {string} scriptUrl
 */
Icon.loadFromIconfontCN = (scriptUrl: string): void => {
  isBrowser && loadResource(scriptUrl);
};

// load ruc icons
Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2887360_g3pt7gj02t.js');

export default Icon;
