import React from 'react';
import PageWrap from './common/PageWrap';
import { TransitionElement, Space, Button, styled } from 'react-uni-comps';

const StyledUCButton = styled(Button)`
  height: 100px;
  margin-top: 10px;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 240ms ease-in-out;

  &.to {
    width: 300px !important;
  }
`;

const StyledButton = styled.div`
  transform: scale(1, 1);
  transition: transform 0.3s ease, color 0.25s linear;
  width: 130px;
  height: 40px;
  display: inline-block;
  cursor: pointer;
  background: #39a0ff;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  text-align: center;
  line-height: 40px;
  color: rgb(0, 0, 0);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: transform 0.25s linear;
    width: 100%;
    height: 100%;
    transform: none;
    z-index: -1;
    background: #bbb;
  }

  &:hover,
  &.to {
    transform: scale(1.05, 1.05);
    color: #fff;

    &::after {
      transform: translateY(-100%);
    }
  }
`;

const App = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);

  return (
    <PageWrap>
      <Space>
        <TransitionElement duration={100}>
          <StyledButton>入场动画</StyledButton>
        </TransitionElement>

        <StyledButton>hover动画</StyledButton>
      </Space>

      {arr.map((item, k) => (
        <TransitionElement key={k}>
          <StyledUCButton type="primary" style={{ width: k * 10 }}>
            {item}
          </StyledUCButton>
        </TransitionElement>
      ))}
    </PageWrap>
  );
};

export default App;
