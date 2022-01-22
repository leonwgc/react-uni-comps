import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import color from 'color';
import DemoBlock from './common/Block';
import { Menu } from 'antd';
import {
  Button,
  PopMenu,
  styled,
  useUpdateLayoutEffect,
  Toast,
  Cell,
  Switch,
} from 'react-uni-comps';

const StyledPopMenu = styled(PopMenu)`
  width: 240px;
  border-radius: 4px;

  .list {
    height: 195px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    .uc-btn {
      border: none;
      transition-property: none;
      &:hover {
        background-color: #005cff;
        color: #fff;
      }
    }
  }
`;

const StyledBtn = styled(Button)`
  margin: 32px;
  &.visible {
    transform: all 0.3s;
    box-shadow: 0 0 4px 4px ${color('#005cff').fade(0.75)};
  }
`;

export default function App() {
  const arr = Array.from(new Array(10), (e, i) => i);
  const ref = useRef(0);

  const [placement, setPlacement] = useState('right-top');
  const [v, setV] = useState(false);
  const [animated, setAnimated] = useState(true);

  useUpdateLayoutEffect(() => {
    if (v) {
      ref.current++;
      setPlacement(ref.current % 2 == 0 ? 'right-top' : 'bottom-left');
    }
  }, [v]);
  return (
    <PageWrap>
      <Cell
        title="动画效果"
        content={<Switch checked={animated} onChange={setAnimated}></Switch>}
      ></Cell>
      <DemoBlock title="自定义菜单">
        <StyledPopMenu
          arrow={true}
          onVisibleChange={setV}
          placement={placement}
          animated={animated}
          trigger="hover"
          content={
            <div className="list">
              {arr.map((i) => (
                <Button block>
                  item
                  {i}
                </Button>
              ))}
            </div>
          }
        >
          <StyledBtn active>鼠标移入移出试试 </StyledBtn>
        </StyledPopMenu>
      </DemoBlock>

      <DemoBlock title="使用antd Menu">
        <PopMenu
          trigger="click"
          animated={animated}
          content={
            <Menu style={{ width: 120, textAlign: 'center' }}>
              <Menu.Item key="0">
                <a onClick={() => Toast.show('菜单1 clicked')}>菜单1</a>
              </Menu.Item>

              <Menu.Item key="1">
                <a>菜单2</a>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">菜单3</Menu.Item>
            </Menu>
          }
        >
          <StyledBtn active>使用antd Menu </StyledBtn>
        </PopMenu>
      </DemoBlock>
    </PageWrap>
  );
}
