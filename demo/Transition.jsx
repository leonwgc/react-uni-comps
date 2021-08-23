import React, { useState } from 'react';
import { TransitionElement, Space } from 'react-uni-comps';
import styled from 'styled-components';
import { Switch } from 'antd';

const StyledDiv = styled.div`
  height: 100px;
  background-color: red;
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

const Tansition = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);
  const [once, setOnce] = useState(true);

  return (
    <div>
      <Space>
        <TransitionElement duration={100}>
          <StyledButton>One</StyledButton>
        </TransitionElement>

        <StyledButton>Two</StyledButton>

        <TransitionElement duration={100}>Three</TransitionElement>
      </Space>
      <div>
        <Space>
          <Switch defaultChecked onChange={setOnce} />
          once
        </Space>
      </div>
      {arr.map((item, k) => (
        <TransitionElement key={k} once={once}>
          <StyledDiv style={{ width: k * 10 }}>{item}</StyledDiv>
        </TransitionElement>
      ))}
    </div>
  );
};

export default Tansition;
