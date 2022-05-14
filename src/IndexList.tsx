import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { getThemeColorCss } from './themeHelper';
import type { BaseProps, StringOrNumber } from './types';
import Button from './Button';
import { throttle } from './helper';

type Item = {
  label: React.ReactNode;
  value: StringOrNumber;
};

type DataItem = {
  title: React.ReactNode;
  children: Item[];
};

type Props = {
  /** 数据 */
  data?: DataItem[];
  /** 点击数据项回调 */
  onItemClick?: (item: Item) => void;
  /**
   * 滚动行为
   * @default smooth
   */
  scrollBehavior?: 'smooth' | 'auto';
} & BaseProps;

const clxPrefix = 'uc-index-list';

const StyledWrap = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;

  .${clxPrefix}-body {
    overflow: scroll;
    height: 100%;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }

    .${clxPrefix}-anchor {
    }

    .${clxPrefix}-title {
      position: sticky;
      top: 0;
      left: 0;
      box-sizing: border-box;
      color: #333;
      font-size: 14px;
      padding: 8px 16px;
      background-color: #f5f5f5;
    }

    .${clxPrefix}-item {
      color: #666;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 10px 16px;
      font-size: 14px;
      background-color: #fff;
      margin: 0;
    }
  }

  .${clxPrefix}-side {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 300;
    display: flex;
    flex-direction: column;
    transform: translateY(-50%);
    padding: 0 12px;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    .${clxPrefix}-side-item {
      color: #999;

      &.active {
        ${getThemeColorCss('color')}
      }
    }
  }
`;

/** 索引列表 */
const IndexList: React.FC<Props> = (props) => {
  const { data = [], onItemClick, className, scrollBehavior = 'smooth', ...rest } = props;
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
    <StyledWrap {...rest} className={clsx('uc-index-list', className)}>
      <div className={clsx(clxPrefix + '-body')} ref={bodyRef}>
        {data.map((dataItem, index) => (
          <div key={index} data-index={index} className={clsx(clxPrefix + '-anchor')}>
            <div className={clsx(clxPrefix + '-title')}>{dataItem.title}</div>
            {dataItem.children.map((item, idx) => (
              <dd
                className={clsx(clxPrefix + '-item')}
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

      <div className={clsx(clxPrefix + '-side')}>
        {data.map((item, idx) => (
          <Button
            as="a"
            className={clsx(clxPrefix + '-side-item', { active: idx === activeIndex })}
            key={idx}
            onClick={() => {
              const anchors = bodyRef.current.children;
              const anchor = anchors[idx] as HTMLElement;
              bodyRef.current.scrollTo({
                top: anchor.offsetTop,
                left: 0,
                behavior: scrollBehavior,
              });
              setActiveIndex(idx);
            }}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </StyledWrap>
  );
};

IndexList.displayName = 'uc-index-list';

export default IndexList;
