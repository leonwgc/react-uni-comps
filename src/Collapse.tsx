import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
import IconArrow from './IconArrow';
import useMount from './hooks/useMount';
import useUpdateLayoutEffect from './hooks/useUpdateLayoutEffect';
import { animationNormal } from './vars';
import { attachPropertiesToComponent } from './util';

type KeysType = Array<string | number> | string | number;

type ItemProps = {
  /** 不可交互状态 */
  disabled?: boolean;
  /** 面板头内容 */
  title?: React.ReactNode | ((active: boolean, disabled: boolean) => React.ReactNode);
  /** 面板key */
  key?: string;
  /** 面板内容 */
  children?: React.ReactNode;
  /** 显示箭头:默认true */
  arrow?: boolean;
};

/**
 *  子项，放在Collapse里面
 *
 * @param {*}
 * @return {*}
 */
const Item = (props: ItemProps) => {
  return props.children;
};

type CollapseProps = {
  /** 子元素*/
  children: React.ReactElement<ItemProps>[];
  /** 当前激活 tab 面板的 key, 如果是数组则可以展开多个项，否则只有一个展开项（手风琴模式） */
  keys?: KeysType;
  /** 切换面板的回调 */
  onChange?: (keys: KeysType) => void;
  className?: string;
  style?: React.CSSProperties;
  /** 展开动画, 默认false */
  animated?: boolean;
};

const StyledWrapper = styled.div`
  -webkit-tap-highlight-color: transparent;

  .item {
    overflow: hidden;

    &.disabled {
      opacity: 0.4;
    }

    .header {
      background: #fff;
      height: 50px;
      color: #333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer;
    }

    .content {
      color: #999;
    }
  }
`;

/**
 *  content renderer
 *
 * @param {*} props
 * @return {*}
 */
const ItemContent = (props) => {
  const { visible, children } = props;
  const innerRef = useRef<HTMLDivElement>(null);

  const [styles, api] = useSpring(() => ({
    from: { height: 0, opacity: 0 },
    config: {
      duration: animationNormal,
    },
  }));

  useMount(() => {
    if (!visible) return;
    const inner = innerRef.current;
    if (!inner) return;
    api.start({
      height: inner.offsetHeight,
      opacity: 1,
      immediate: true,
    });
  });

  useUpdateLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    if (visible) {
      api.start({
        height: inner.offsetHeight,
        opacity: 1,
      });
    } else {
      api.start({
        from: {
          height: inner.offsetHeight,
          opacity: 1,
        },
        to: {
          height: 0,
          opacity: 0,
        },
      });
    }
  }, [visible]);

  return (
    <animated.div className={`content`} style={styles}>
      <div ref={innerRef}>{children}</div>
    </animated.div>
  );
};

/**
 * 折叠面板
 */
const Collapse: React.FC<CollapseProps> = ({
  children,
  onChange,
  className,
  animated,
  keys = '',
  ...rest
}) => {
  const count = React.Children.count(children);

  // 手风琴模式
  const isSingleMode = !Array.isArray(keys);

  // inner keys
  const [_keys, _setKeys] = useState<KeysType>(keys);

  useUpdateEffect(() => {
    _setKeys(keys);
  }, [keys]);

  if (count === 0) {
    return null;
  }

  return (
    <StyledWrapper {...rest} className={clsx('uc-collapse', className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          let { key } = child;
          key = key || index;
          const { title = '', disabled, arrow = true, children } = child.props as ItemProps;
          const active = isSingleMode
            ? _keys === key
            : (_keys as Array<string | number>).indexOf(key) > -1;
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
                      const idx = (_keys as Array<string | number>).indexOf(key);
                      (_keys as Array<string | number>).splice(idx, 1);

                      keys = [...(_keys as Array<string | number>)];
                    }
                  } else {
                    if (isSingleMode) {
                      keys = key;
                    } else {
                      keys = [...(_keys as Array<string | number>), key];
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
                <span>{typeof title === 'function' ? title(active, disabled) : title}</span>
                <span>{arrow && <IconArrow direction={active ? 'top' : 'down'} />}</span>
              </div>
              {animated ? (
                <ItemContent visible={active}>{children}</ItemContent>
              ) : (
                active && <div className={clsx('content')}>{children}</div>
              )}
            </div>
          );
        }
      })}
    </StyledWrapper>
  );
};

Collapse.displayName = 'UC-Collapse';

export default attachPropertiesToComponent(Collapse, { Item });
