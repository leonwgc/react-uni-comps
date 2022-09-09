import React, { useState, useRef } from 'react';
import PageWrap from './common/PageWrap';
import color from 'color';
import DemoBlock from './common/DemoBlock';
import { Button, PopMenu, styled, Cell, Switch, AutoCenter } from 'react-uni-comps';

const StyledPopMenu = styled(PopMenu)`
  width: 120px;
  border-radius: 4px;

  .uc-btn {
    height: 40px;
    border: none;
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
  const arr = Array.from(new Array(5), (e, i) => i);
  const ref = useRef(0);

  const [v, setV] = useState(false);
  const [animated, setAnimated] = useState(true);

  return (
    <PageWrap>
      <Cell
        title="动画效果"
        content={<Switch checked={animated} onChange={(c) => setAnimated(c)}></Switch>}
      ></Cell>
      <DemoBlock title="自定义菜单">
        <AutoCenter>
          <StyledPopMenu
            arrow={true}
            onVisibleChange={setV}
            placement="bottom"
            animate={animated}
            trigger="click"
            content={
              <div>
                {arr.map((i) => (
                  <Button block key={i}>
                    item
                    {i}
                  </Button>
                ))}
              </div>
            }
          >
            <StyledBtn type="primary">显示菜单</StyledBtn>
          </StyledPopMenu>
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
