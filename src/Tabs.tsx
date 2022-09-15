//#region  top

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import { prefixClassName } from './helper';
import { attachPropertiesToComponent } from './util';
import usePrevious from './hooks/usePrevious';
import type { StringOrNumber } from './types';

const getClassName = prefixClassName('uc-tabs');

type ItemProp = {
  /** 禁用 */
  disabled?: boolean;
  /** 标题 */
  title?: React.ReactNode;
  /** 内容 */
  children?: React.ReactNode;
};

type TabsProp = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
  /** 下划线宽度,可以使用百分比/px/true/false */
  underline?: StringOrNumber | boolean;
  /** 选择的tab index,非受控模式使用*/
  defaultValue?: number;
  /** 选择的tab index */
  value?: number;
  /** index变化时触发的回调函数 */
  onChange?: (index: number) => void;
  /** 头部右侧区域内容 */
  extra?: React.ReactNode;
  /**
   * 是否显示border
   * @default true
   *  */
  border?: boolean;
  /**
   * tab标题宽度
   */
  tabWidth?: StringOrNumber;
};

const StyledWrapper = styled.div`
  -webkit-tap-highlight-color: transparent;

  .${getClassName('header-wrap')} {
    display: flex;
    height: 44px;
    position: relative;
    overflow-x: scroll;
    border-bottom: 1px solid ${vars.border};
    align-items: center;
    &::-webkit-scrollbar {
      display: none;
    }

    &.no-border {
      border-bottom: none;
    }
  }

  .${getClassName('content-wrap')} {
    overflow: hidden;
  }

  .${getClassName('extra')} {
  }

  .${getClassName('header-item')} {
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    padding: 0 12px;
    user-select: none;
    height: 100%;
    cursor: pointer;
    flex: none;

    &.active {
      ${getThemeColorCss('color')}
      font-weight: 500;
    }
    &.disabled {
      cursor: not-allowed;
      color: ${vars.disabledText};
    }
  }

  .${getClassName('header-line')} {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    transition: transform 0.3s ease;
    height: 100%;
    display: flex;
    justify-content: center;

    .line {
      position: absolute;
      bottom: 0;
      height: 2px;
      ${getThemeColorCss('background-color')}
    }
  }
`;

/**
 *  选项卡项，放在Tabs里面
 *
 * @param {*} { children }
 * @return {*}
 */
const Tab: React.FC<ItemProp> = ({ children }) => {
  return <>{children}</>;
};

//#endregion

/**
 * 选项卡切换
 */
const Tabs: React.FC<TabsProp> = ({
  children,
  underline = '50%',
  value,
  defaultValue = 0,
  border = true,
  onChange,
  tabWidth,
  extra,
  className,
  ...rest
}) => {
  const underlineElRef = useRef<HTMLDivElement>();
  const contentWrapElRef = useRef<HTMLDivElement>();
  const headerWrapElRef = useRef<HTMLDivElement>();
  const mountedRef = useRef(false);
  const tabRef = useRef<HTMLElement[]>([]);

  const [_v, _setV] = useState(typeof value === 'undefined' ? defaultValue : value);

  useUpdateEffect(() => {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);

  const prevVal = usePrevious(_v);

  useEffect(() => {
    const underlineEl = underlineElRef.current;
    if (underlineEl && underline) {
      underlineEl.style.transform = `translateX(${tabRef.current[_v].offsetLeft}px)`;
      underlineEl.style.width = tabRef.current[_v].offsetWidth + 'px';
    }
  }, [_v, underline]);

  useEffect(() => {
    const headerWrapEl = headerWrapElRef.current;
    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      const count = React.Children.count(children);
      const size = ~~(headerWrapEl.scrollWidth / count);

      if (!mountedRef.current) {
        mountedRef.current = true;

        headerWrapEl.scroll({
          left: (_v + 1) * size - headerWrapEl.offsetWidth,
        });
      } else {
        if (typeof prevVal !== 'undefined') {
          if (_v > prevVal) {
            // right
            headerWrapEl.scroll({
              left: (_v + 2) * size - headerWrapEl.offsetWidth,
              behavior: 'smooth',
            });
          } else if (_v < prevVal) {
            // left
            headerWrapEl.scroll({
              left: (_v - 1) * size,
              behavior: 'smooth',
            });
          } else {
            // ignored
          }
        } else if (size * (_v + 1) <= headerWrapEl.offsetWidth && headerWrapEl.scrollLeft > 0) {
          headerWrapEl.scroll({
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [_v, prevVal]);

  if (React.Children.count(children) === 0) {
    return null;
  }

  return (
    <StyledWrapper {...rest} className={clsx(getClassName(), className)}>
      <div
        className={clsx(getClassName('header-wrap'), { 'no-border': !border })}
        ref={headerWrapElRef}
      >
        {!!underline && (
          <div
            ref={underlineElRef}
            className={clsx(getClassName('header-line'), getClassName('header-item'))}
            style={{ width: tabWidth }}
          >
            <div
              className="line"
              style={{ width: typeof underline === 'boolean' ? '100%' : underline }}
            ></div>
          </div>
        )}
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (React.isValidElement(child)) {
            const { title = '', disabled } = child.props as ItemProp;
            return (
              <div
                key={index}
                className={clsx(getClassName('header-item'), {
                  active: index === _v,
                  disabled: disabled,
                })}
                ref={(e) => (tabRef.current[index] = e)}
                style={{ width: tabWidth }}
                onClick={() => {
                  if (!disabled && index !== _v) {
                    onChange?.(index);
                    _setV(index);
                  }
                }}
              >
                {title}
              </div>
            );
          }
        })}
        {extra && <span className={clsx(getClassName('extra'))}>{extra}</span>}
      </div>
      <div className={getClassName('content-wrap')} ref={contentWrapElRef}>
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (_v === index && React.isValidElement(child)) {
            return child;
          }
        })}
      </div>
    </StyledWrapper>
  );
};

export default attachPropertiesToComponent(Tabs, { /** 子项 */ Tab });
