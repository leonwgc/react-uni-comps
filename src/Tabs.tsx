//#region  top

import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import { throttle, prefixClassName } from './helper';
import { attachPropertiesToComponent } from './util';
import usePrevious from './hooks/usePrevious';
import useMount from './hooks/useMount';
import type { BaseProps, StringOrNumber } from './types';

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
  /** Tabs.Tab子元素*/
  children: React.ReactNode;
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
} & BaseProps;

const StyledWrapper = styled.div`
  -webkit-tap-highlight-color: transparent;

  .${getClassName('header-wrap')} {
    display: flex;
    height: 44px;
    box-sizing: border-box;
    position: relative;
    margin: 0;
    padding: 0;
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
    font-size: 14px;
    flex: none;
    width: 56px;
    padding: 0 12px;
    user-select: none;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;

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

  const [_v, _setV] = useState(typeof value === 'undefined' ? defaultValue : value);

  useUpdateEffect(() => {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);

  useLayoutEffect(() => {
    const setUnderlineSize = throttle(() => {
      const underlineEl = underlineElRef.current;
      if (underline && underlineEl) {
        const next = underlineEl.nextSibling as HTMLElement;
        if (next) {
          underlineEl.style.width = next.offsetWidth + 'px';
        }
      }
    }, 34);

    if (underline) {
      window.addEventListener('resize', setUnderlineSize);
    }

    setUnderlineSize();

    return () => {
      if (underline) {
        window.removeEventListener('resize', setUnderlineSize);
      }
    };
  }, [underline]);

  const prevVal = usePrevious(_v);

  useEffect(() => {
    const headerWrapEl = headerWrapElRef.current;
    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      const itemEl = headerWrapEl.querySelector(
        `.${getClassName('header-item')}`
      ) as HTMLDivElement;

      if (itemEl) {
        if (_v > prevVal) {
          // right
          headerWrapEl.scroll({
            left: (_v + 3) * itemEl.offsetWidth - headerWrapEl.offsetWidth,
            behavior: 'smooth',
          });
        } else {
          // left
          headerWrapEl.scroll({
            left: (_v - 2) * itemEl.offsetWidth,
            behavior: 'smooth',
          });
        }
      } else if (
        itemEl.offsetWidth * (_v + 1) <= headerWrapEl.offsetWidth &&
        headerWrapEl.scrollLeft > 0
      ) {
        headerWrapEl.scroll({
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }, [_v, prevVal]);

  useMount(() => {
    const headerWrapEl = headerWrapElRef.current;
    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      const itemEl = headerWrapEl.querySelector('.uc-tabs-header-item') as HTMLDivElement;

      // scroll
      headerWrapEl.scroll({
        left: (_v - 2) * itemEl.offsetWidth,
      });
    }
  });

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
            style={{ transform: `translate3d(${_v * 100 + '%'}, 0, 0)`, width: tabWidth }}
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
