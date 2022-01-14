import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
import IconArrow from './IconArrow';

type CollapseProps = {
  /** 子元素*/
  children: typeof Item[];
  /** 当前激活 tab 面板的 key, 如果是数组则可以展开多个项，否则只有一个展开项（手风琴模式） */
  keys?: string[] | string;
  /** 切换面板的回调 */
  onChange?: (keys: string[] | string) => void;
  className?: string;
  style?: React.CSSProperties;
};

type ItemProps = {
  /** 不可交互状态 */
  disabled?: boolean;
  /** 面板头内容 */
  title?: React.ReactNode;
  /** 面板key */
  key?: string;
  /** 面板内容 */
  children?: React.ReactElement;
};

const StyledWrapper = styled.div`
  -webkit-tap-highlight-color: transparent;

  .item {
    overflow: hidden;

    &.disabled {
      opacity: 0.4;
    }
  }

  .header {
    background: #fff;
    height: 50px;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .content {
    color: #999;

    display: none;
    &.active {
      display: unset;
    }
  }
`;

/**
 *  子项，放在Collapse里面
 *
 * @param {*} { children }
 * @return {*}
 */
const Item = ({ children }) => {
  return children;
};

/**
 * 选项卡切换
 */
const Collapse: React.FC<CollapseProps> & { Item: typeof Item } = ({
  children,
  onChange,
  className,
  keys = '',
  ...rest
}) => {
  const count = React.Children.count(children);

  // 手风琴模式
  const isSingleMode = typeof keys === 'string';

  // inner keys
  const [_keys, _setKeys] = useState(keys);

  useUpdateEffect(() => {
    _setKeys(keys);
  }, [keys]);

  if (count === 0) {
    return null;
  }

  return (
    <StyledWrapper {...rest} className={clsx('uc-collapse', className)}>
      {React.Children.map(children, (child: ItemProps, index) => {
        if (React.isValidElement(child)) {
          let { key } = child;
          key = key || index + '';
          const { title = '', disabled, children } = child.props as ItemProps;
          const active = isSingleMode ? _keys === key : _keys.indexOf(key) > -1;
          return (
            <div
              key={key}
              className={clsx('item', {
                active: active,
                disabled: disabled,
              })}
              onClick={() => {
                if (!disabled) {
                  let keys;
                  if (active) {
                    if (isSingleMode) {
                      keys = '';
                    } else {
                      const idx = _keys.indexOf(key);
                      (_keys as string[]).splice(idx, 1);

                      keys = [...(_keys as string[])];
                    }
                  } else {
                    if (isSingleMode) {
                      keys = key;
                    } else {
                      keys = [...(_keys as string[]), key];
                    }
                  }
                  _setKeys(keys);
                  onChange?.(keys);
                }
              }}
            >
              <div
                className={clsx('header', {
                  disabled: disabled,
                })}
              >
                <span>{title}</span>
                <span>
                  <IconArrow direction={active ? 'down' : 'right'} />
                </span>
              </div>

              <div className={clsx('content', { active })}>{children}</div>
            </div>
          );
        }
      })}
    </StyledWrapper>
  );
};

Collapse.displayName = 'UC-Collapse';

/** 直接子元素 */
Collapse.Item = Item;

export default Collapse;
