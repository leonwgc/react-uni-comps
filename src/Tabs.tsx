//#region  top

import React, { useState, useLayoutEffect, useRef, RefObject } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import { throttle } from './helper';
import FingerGesture from './FingerGesture';
import useCallbackRef from './hooks/useCallbackRef';
import { attachPropertiesToComponent } from './util';

type ItemProp = {
  /** 禁用 */
  disabled?: boolean;
  /** 标题 */
  title?: React.ReactNode;
  /** 内容 */
  children?: React.ReactNode;
};

type TabsProp = {
  /** 下划线宽度,默认100%,可以使用百分比/px/true/false */
  underline?: string | boolean;
  /** Tabs.Tab子元素*/
  children: React.ReactElement<ItemProp>[];
  /** 选择的tab index,非受控模式使用*/
  defaultValue?: number;
  /** 选择的tab index, 默认 0 */
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

const StyledWrapper = styled.div`
  -webkit-tap-highlight-color: transparent;
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
    border-bottom: 1px solid ${vars.border};
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
    color: ${vars.disabledText};
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
      transform: translate3d(${(props) => props.value * 100 + '%'}, 0, 0);

      .line {
        position: absolute;
        bottom: 0;
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
const Tab: React.FC<ItemProp> = ({ children }) => {
  return <>{children}</>;
};

//#endregion

/**
 * 选项卡切换
 */
const Tabs: React.FC<TabsProp> = ({
  children,
  underline = true,
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
  const underlineElRef = useRef<HTMLDivElement>();
  const contentWrapElRef = useRef<HTMLDivElement>();

  const [_v, _setV] = useState(typeof value === 'undefined' ? defaultValue : value);

  const valRef = useCallbackRef<number>(_v);
  const onChangeRef = useCallbackRef(onChange);

  useLayoutEffect(() => {
    let fg;
    if (swipe && contentWrapElRef.current) {
      const el = contentWrapElRef.current;
      fg = new FingerGesture(el, {
        onSwipe: (e) => {
          if (e.direction === 'right' && valRef.current > 0) {
            // go to left tab
            const prevIndex = valRef.current - 1;
            _setV(prevIndex);
            onChangeRef.current?.(prevIndex);
          } else if (e.direction === 'left' && valRef.current < count - 1) {
            // go to right tab
            const nextIndex = valRef.current + 1;
            _setV(nextIndex);
            onChangeRef.current?.(nextIndex);
          }
        },
      });
    }
    return () => {
      if (swipe && fg) {
        fg?.destroy();
      }
    };
  }, [swipe, valRef, count, onChangeRef]);

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

  return (
    <StyledWrapper {...rest} className={clsx('uc-tabs', className)}>
      <div className={clsx('uc-tabs-header-wrap', { 'no-border': !border })}>
        {underline && (
          <StyledTabHeadItem
            ref={underlineElRef}
            className={clsx('uc-tabs-header-item', 'uc-tabs-header-line')}
            count={count}
            value={_v}
          >
            <div
              className="line"
              style={{ width: typeof underline === 'boolean' ? '100%' : underline }}
            ></div>
          </StyledTabHeadItem>
        )}
        {React.Children.map(children, (child: React.ReactElement, index) => {
          if (React.isValidElement(child)) {
            const { title = '', disabled } = child.props as ItemProp;
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
        {extra && <span className={clsx('uc-tabs-extra', { underline: underline })}>{extra}</span>}
      </div>
      <div className={`uc-tabs-content-wrap`} ref={contentWrapElRef}>
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
