import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import { styled, SideBar, Waypoint } from 'react-uni-comps';

const colors = [
  '#005cff',
  '#00bc70',
  '#f5222d',
  '#1890ff',
  '#fa541b',
  '#13c2c2',
  '#2f54ec',
  '#712fd1',
];

const StyledWrap = styled.div`
  display: flex;

  .content {
    flex: 1;
    height: 100vh;
    position: relative;
    overflow: hidden;
    .wrap {
      height: 100%;
      width: 100%;
      overflow-y: scroll;

      .item {
        height: 100%;
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        color: #fff;
      }
    }
  }
`;

const items = [
  { title: '菜单1' },
  { title: '菜单2' },
  { title: '菜单3' },
  { title: '菜单4' },
  { title: '菜单5' },
  { title: '菜单6' },
];

export default function App() {
  const [index, setIndex] = useState<number>(0);
  const itemRefs = useRef<HTMLElement[]>([]);
  const wrapRef = useRef<HTMLElement>();

  return (
    <PageWrap>
      <StyledWrap>
        <SideBar
          index={index}
          onChange={(v) => {
            setIndex(v);
            itemRefs.current[v].scrollIntoView(true);
          }}
          items={items}
        ></SideBar>
        <div className="content">
          <div className="wrap" ref={wrapRef}>
            {items.map((item, index) => (
              <div
                ref={(el) => (itemRefs.current[index] = el)}
                key={index}
                className="item"
                style={{
                  background: colors[index],
                }}
              >
                <Waypoint onVisible={() => setIndex(index)}>内容{index + 1}</Waypoint>
              </div>
            ))}
          </div>
        </div>
      </StyledWrap>
    </PageWrap>
  );
}
