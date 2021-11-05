import React, { MutableRefObject, useState, useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Waypoint from './Waypoint';
import { getThemeColorCss } from './themeHelper';

type Item = {
  label: React.ReactNode;
  value?: string;
  subItems: Item[];
};

type Props = {
  className?: string;
  /** 数据 */
  data: Item[];
  /** 点击数据项回调 */
  onItemClick?: (item: Omit<Item, 'subItems'>) => void;
};

const StyledContainer = styled.div`
  .uc-indexlist-side {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    text-align: center;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;

    .uc-indexlist-side-item {
      padding: 0 8px 0 16px;
      font-weight: 500;
      font-size: 10px;
      line-height: 14px;
      user-select: none;

      &.active {
        ${getThemeColorCss('color')}
      }
    }
  }

  .bar-title {
    top: 0;
    z-index: 1;
    box-sizing: border-box;
    color: #333;
    font-size: 14px;
    padding: 8px 16px;
    background-color: #f5f5f5;
    &.active {
      ${getThemeColorCss('color')}
    }
  }

  .bar-item {
    color: #666;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 16px;
    overflow: hidden;
    font-size: 14px;
    background-color: #fff;
    position: relative;
    margin: 0;
    &:after {
      content: '';
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;

      border-bottom: 1px solid #e0e0e0;

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        width: 200%;
        height: 200%;
        transform: scale(0.5);
        transform-origin: 0 0;
      }
    }
  }
`;

const setActiveIndex = (containerRef, setIndex) => {
  const els = [...containerRef.current.querySelectorAll('.wp')];
  for (const el of els) {
    if (el.dataset.visible === '1') {
      setIndex(Number(el.dataset.index));
      break;
    }
  }
};

const renderItem = (
  item: Item,
  index: number,
  activeIndex: number,
  setIndex,
  containerRef: MutableRefObject<HTMLElement>,
  onItemClick
) => {
  const { label, subItems = [] } = item;
  return (
    <React.Fragment key={index}>
      <dt
        id={`index-bar-` + index}
        className={clsx('bar-title', { active: activeIndex === index })}
      >
        {label}
        <Waypoint
          className="wp"
          data-index={index}
          onVisible={(p) => {
            p.dataset.visible = '1';
            setActiveIndex(containerRef, setIndex);
          }}
          onInVisible={(p) => {
            p.dataset.visible = '0';
            setActiveIndex(containerRef, setIndex);
          }}
        />
      </dt>
      {subItems.map((item, idx) => (
        <dd
          className="bar-item"
          onClick={() => {
            onItemClick?.(item);
          }}
          key={idx}
          data-value={item.value}
        >
          {item.label}
        </dd>
      ))}
    </React.Fragment>
  );
};

/** 索引列表 */
const IndexList = (props: Props): React.ReactElement => {
  const { data = [], onItemClick, className } = props;
  const ref = useRef<HTMLDivElement>();
  const [index, setIndex] = useState(0);

  return (
    <StyledContainer className={clsx('uc-indexlist', className)} ref={ref}>
      <dl>{data.map((item, idx) => renderItem(item, idx, index, setIndex, ref, onItemClick))}</dl>
      <div className="uc-indexlist-side">
        {data.map((item, idx) => (
          <div
            className={clsx('uc-indexlist-side-item', { active: idx === index })}
            key={idx}
            onClick={() => {
              const el = ref.current.querySelector('#index-bar-' + idx);
              el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </StyledContainer>
  );
};

IndexList.displayName = 'UC-IndexList';

export default IndexList;
