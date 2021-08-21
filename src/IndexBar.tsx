import React, { MutableRefObject, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';
// import { isSupportStyleValue, isBrowser } from './dom';
import { useRef } from 'react';
import Waypoint from './Waypoint';

// let isSupportSticky;

// if (isBrowser && isSupportStyleValue('position', 'sticky')) {
//   isSupportSticky = true;
// }

type Item = {
  label: string;
  value?: string;
  subItems: Item[];
};

export type Props = {
  color?: string /** hilight颜色 */;
  data: Item[];
};

const StyledContainer = styled.div<{ color: string }>`
  .uc-indexbar-side {
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

    .uc-indexbar-side-item {
      padding: 0 8px 0 16px;
      font-weight: 500;
      font-size: 10px;
      line-height: 14px;

      &.active {
        color: ${({ color }) => color};
      }
    }
  }

  .bar-title {
    /* position: sticky; */
    top: 0;
    z-index: 1;
    box-sizing: border-box;
    color: #333;
    font-size: 14px;
    padding: 8px 16px;
    background-color: #f5f5f5;
    &.active {
      color: ${({ color }) => color};
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
  for (let el of els) {
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
  containerRef: MutableRefObject<HTMLElement>
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
        <dt className="bar-item" key={idx} data-value={item.value}>
          {item.label}
        </dt>
      ))}
    </React.Fragment>
  );
};

/** 索引列表 */
const IndexBar = (props: Props): React.ReactElement => {
  const { data = [], color = colors.primary } = props;
  const ref = useRef<HTMLDivElement>();
  const [index, setIndex] = useState(0);

  return (
    <StyledContainer className={clsx('uc-indexbar')} color={color} ref={ref}>
      <dl>{data.map((item, idx) => renderItem(item, idx, index, setIndex, ref))}</dl>
      <div className="uc-indexbar-side">
        {data.map((item, idx) => (
          <div
            className={clsx('uc-indexbar-side-item', { active: idx === index })}
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

IndexBar.displayName = 'uc-indexbar';

export default IndexBar;
