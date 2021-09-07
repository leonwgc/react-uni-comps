import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';
import { getThemeColorCss } from './themeHelper';

type TabsProp = {
  /** 下划线宽度,默认100%,可以使用百分比和px*/
  underline?: string;
  /** Tabs.Tab子元素*/
  children: React.ReactElement[];
  /** 选择的tab index,0 */
  value?: number;
  /** index变化时触发的回调函数 */
  onChange?: (index: number) => void;
  /** 头部右侧区域内容 */
  extra?: React.ReactNode;
  /** 是否显示border,默认显示 */
  border?: boolean;
} & React.HTMLAttributes<HTMLElement>;

type TabProp = {
  disabled?: boolean;
  title: React.ReactNode;
  children: React.ReactElement;
};

const StyledTabHeaderWrap = styled.div`
  display: flex;
  height: 44px;
  position: relative;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  border-bottom: 1px solid ${colors.border};
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }

  &.no-border {
    border-bottom: none;
  }

  .uc-tabs-extra {
    margin-left: 16px;
    &.underline {
      transform: translateX(-100%);
    }
  }
`;

const StyledTabHeadItem = styled.div<{
  value: number;
  count: number;
  underline?: string;
}>`
  flex: 1 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000d9;
  font-size: 14px;
  min-width: 56px;
  user-select: none;

  &.active {
    ${getThemeColorCss('color')}
    font-weight: 500;
  }
  &.disabled {
    cursor: not-allowed;
    color: ${colors.disabledText};
  }

  &.uc-tabs-header-item {
    height: 100%;
    box-sizing: border-box;
    &.uc-tabs-header-line {
      position: relative;
      background-color: transparent !important;
      transition: transform 0.3s ease;
      transform: translate3d(${(props) => (props.value - props.count) * 100 + '%'}, 0px, 0px);

      &::after {
        content: ' ';
        position: absolute;
        bottom: 0;
        width: ${(props) => props.underline};
        height: 2px;
        ${getThemeColorCss('background-color')}
      }
    }
  }
`;

const StyledTabContentWrap = styled.div`
  overflow: hidden;
`;
/**
 *  选项卡项，放在Tabs里面
 *
 * @param {*} { children }
 * @return {*}
 */
const Tab: React.FC<TabProp> = ({ children }) => {
  return children;
};

const isValidtTabElement = (el) => {
  return React.isValidElement(el) && el.type === Tab;
};
/**
 * 选项卡切换
 */
const Tabs: React.FC<TabsProp> & { Tab: typeof Tab } = ({
  children,
  underline = '100%',
  value = 0,
  border = true,
  onChange,
  extra,
  className,
  ...otherProps
}) => {
  const count = React.Children.count(children);

  return (
    <div {...otherProps} className={clsx('uc-tabs', className)}>
      <StyledTabHeaderWrap className={clsx('uc-tabs-header-wrap', { 'no-border': !border })}>
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (isValidtTabElement(child)) {
            const { title = '', disabled } = child.props as TabProp;
            return (
              <StyledTabHeadItem
                key={index}
                className={clsx('uc-tabs-header-item', {
                  active: index === value,
                  disabled: disabled,
                })}
                onClick={() => {
                  if (!disabled && index !== value) {
                    onChange?.(index);
                  }
                }}
              >
                {title}
              </StyledTabHeadItem>
            );
          }
        })}
        {underline ? (
          <StyledTabHeadItem
            className={clsx('uc-tabs-header-item', 'uc-tabs-header-line')}
            count={count}
            underline={underline}
            value={value}
          />
        ) : null}
        <span className={clsx('uc-tabs-extra', { underline: underline })}>{extra}</span>
      </StyledTabHeaderWrap>
      <StyledTabContentWrap className={`uc-tabs-content-wrap`}>
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (isValidtTabElement(child)) {
            const { children } = child.props as TabProp;
            const style: React.CSSProperties = {};
            if (index !== value) {
              style.display = 'none';
            }
            return (
              <div key={index} style={style}>
                {children}
              </div>
            );
          }
        })}
      </StyledTabContentWrap>
    </div>
  );
};

/** Tab直接子元素 */
Tabs.Tab = Tab;

export default Tabs;
