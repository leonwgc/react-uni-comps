import React, { useState, useLayoutEffect, useRef, useCallback, useEffect, RefObject } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';
import useGesture from './hooks/useGesture';
import useThisRef from './hooks/useThisRef';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from 'react-use-lib/es/useUpdateEffect';
import { throttle } from './helper';

const isMobileEnv = isMobile();

type TabsProp = {
  /** 下划线宽度,默认100%,可以使用百分比和px*/
  underline?: string;
  /** Tabs.Tab子元素*/
  children: React.ReactElement[];
  /** 选择的tab index,非受控模式使用*/
  defaultValue?: number;
  /** 选择的tab index,0 */
  value?: number;
  /** 是否支持滑动切换(移动端)*/
  swipe?: boolean;
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

const StyledWrapper = styled.div`
  .uc-tabs-content-wrap {
    overflow: hidden;
  }
  .uc-tabs-header-wrap {
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
    }
  }
`;

const StyledTabHeadItem = styled.div<{
  value?: number;
  count?: number;
  underline?: string;
  ref?: RefObject<HTMLDivElement>;
}>`
  flex: 1;
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
    cursor: pointer;
    &.uc-tabs-header-line {
      position: absolute;
      left: 0;
      top: 0;
      pointer-events: none;
      transition: transform 0.3s ease;
      transform: translateX(${(props) => props.value * 100 + '%'});

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
  value,
  defaultValue = 0,
  border = true,
  onChange,
  extra,
  swipe,
  className,
  ...rest
}) => {
  const count = React.Children.count(children);
  const underlineRef = useRef<HTMLDivElement>();
  const contentWrapRef = useRef<HTMLDivElement>();

  const [_v, _setV] = useState(typeof value === 'undefined' ? defaultValue : value);

  const thisRef = useThisRef({
    onChange,
    _v,
  });

  useGesture(contentWrapRef, {
    onSwipe: (e) => {
      e.preventDefault();
      const current = thisRef.current._v;
      if (e.direction === 'right' && current > 0) {
        // go to left tab
        const prevIndex = current - 1;
        _setV(prevIndex);
        thisRef.current.onChange?.(prevIndex);
      } else if (e.direction === 'left' && current < count - 1) {
        // go to right tab
        const nextIndex = current + 1;
        _setV(nextIndex);
        thisRef.current.onChange?.(nextIndex);
      }
    },
  });

  useUpdateEffect(() => {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);

  const setUnderlineSize = useCallback(() => {
    if (underline) {
      const underlineEl = underlineRef.current;
      const next = underlineEl.nextSibling as HTMLElement;
      if (next) {
        underlineEl.style.width = next.offsetWidth + 'px';
      }
    }
  }, [underline]);

  useLayoutEffect(() => {
    setUnderlineSize();
  }, [setUnderlineSize]);

  useEffect(() => {
    const throttledSetUnderlineSize = throttle(setUnderlineSize, 34);
    window.addEventListener('resize', throttledSetUnderlineSize);

    return () => {
      window.removeEventListener('resize', throttledSetUnderlineSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledWrapper {...rest} className={clsx('uc-tabs', className)}>
      <div className={clsx('uc-tabs-header-wrap', { 'no-border': !border })}>
        {underline ? (
          <StyledTabHeadItem
            ref={underlineRef}
            className={clsx('uc-tabs-header-item', 'uc-tabs-header-line')}
            count={count}
            underline={underline}
            value={_v}
          />
        ) : null}
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (isValidtTabElement(child)) {
            const { title = '', disabled } = child.props as TabProp;
            return (
              <StyledTabHeadItem
                key={index}
                className={clsx('uc-tabs-header-item', {
                  active: index === _v,
                  disabled: disabled,
                })}
                onClick={() => {
                  if (!disabled && index !== _v) {
                    onChange?.(index);
                    _setV(index);
                  }
                }}
              >
                {title}
              </StyledTabHeadItem>
            );
          }
        })}
        {extra ? (
          <span className={clsx('uc-tabs-extra', { underline: underline })}>{extra}</span>
        ) : null}
      </div>
      <div className={`uc-tabs-content-wrap`} ref={isMobileEnv && swipe ? contentWrapRef : null}>
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (isValidtTabElement(child)) {
            const { children, disabled } = child.props as TabProp;
            const style: React.CSSProperties = {};
            if (index !== _v || disabled) {
              style.display = 'none';
            }
            return (
              <div key={index} style={style}>
                {children}
              </div>
            );
          }
        })}
      </div>
    </StyledWrapper>
  );
};

/** Tab直接子元素 */
Tabs.Tab = Tab;

export default Tabs;
