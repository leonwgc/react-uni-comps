import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { getThemeColorCss } from './themeHelper';
import type { BaseProps, StringOrNumber } from './types';
import { throttle, prefixClassName } from './helper';
import Space from './Space';

type Item = {
  label: React.ReactNode;
  value: StringOrNumber;
};

type DataItem = {
  title: React.ReactNode;
  children: Item[];
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 数据 */
  data?: DataItem[];
  /** 点击数据项回调 */
  onItemClick?: (item: Item) => void;
} & BaseProps;

const getClassName = prefixClassName('uc-index-list');

const StyledWrap = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;

  .${getClassName('body')} {
    overflow: scroll;
    height: 100%;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .${getClassName('anchor')} {
  }

  .${getClassName('title')} {
    position: sticky;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #333;
    font-size: 14px;
    padding: 8px 16px;
    background-color: #f5f5f5;
  }

  .${getClassName('item')} {
    color: #666;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 16px;
    font-size: 14px;
    background-color: #fff;
    margin: 0;
  }

  .${getClassName('side')} {
    position: absolute;
    top: 50%;
    right: 12px;
    z-index: 300;

    .${getClassName('side-item')} {
      cursor: pointer;
      color: #999;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;

      &.active {
        ${getThemeColorCss('background-color')};
        color: #fff;
        border-radius: 50%;
      }
    }
  }
`;

/** 索引列表 */
const IndexList: React.FC<Props> = (props) => {
  const { data = [], onItemClick, className, ...rest } = props;
  const bodyRef = useRef<HTMLDivElement>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const bodyEl = bodyRef.current;
    if (bodyEl) {
      const scrollSpy = throttle(() => {
        const children = bodyEl.children;
        for (let i = 0; i < children.length; i++) {
          const el = children[i] as HTMLElement;
          if (el.offsetTop + el.offsetHeight > bodyEl.scrollTop) {
            setActiveIndex(i);
            return;
          }
        }
      });
      bodyEl.addEventListener('scroll', scrollSpy);

      return () => {
        bodyEl.removeEventListener('scroll', scrollSpy);
      };
    }
  }, []);

  return (
    <StyledWrap {...rest} className={clsx(getClassName(), className)}>
      <div className={getClassName('body')} ref={bodyRef}>
        {data.map((dataItem, index) => (
          <div key={index} data-index={index} className={getClassName('anchor')}>
            <div className={getClassName('title')}>{dataItem.title}</div>
            {dataItem.children.map((item, idx) => (
              <dd
                className={getClassName('item')}
                onClick={() => {
                  onItemClick?.(item);
                }}
                key={idx}
                data-value={item.value}
              >
                {item.label}
              </dd>
            ))}
          </div>
        ))}
      </div>

      <Space className={getClassName('side')} direction="vertical" size={2}>
        {data.map((item, idx) => (
          <a
            className={clsx(getClassName('side-item'), { active: idx === activeIndex })}
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              const anchors = bodyRef.current.children;
              const anchor = anchors[idx] as HTMLElement;
              bodyRef.current.scrollTo({
                top: anchor.offsetTop,
                left: 0,
              });
            }}
          >
            {item.title}
          </a>
        ))}
      </Space>
    </StyledWrap>
  );
};

IndexList.displayName = 'uc-index-list';

export default IndexList;
