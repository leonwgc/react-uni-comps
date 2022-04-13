import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { AnimationElement, styled, Space, Button } from 'react-uni-comps';
import 'animate.css';

const StyledButton = styled(Button)`
  height: 40px;
  width: 40px;
  margin-top: 10px;
  font-size: 20px;

  @keyframes move {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(90deg);
    }

    75% {
      transform: rotate(135deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

const Animation = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);

  return (
    <PageWrap>
      <DemoBlock title="例子">
        <Space size={20} wrap>
          {arr.map((item, k) => (
            <AnimationElement
              key={k}
              name="move"
              duration="4s"
              fillMode="both"
              iterationCount="infinite"
            >
              <StyledButton type="primary">{item}</StyledButton>
            </AnimationElement>
          ))}
          <AnimationElement
            duration="400ms"
            timingFunc="ease-out"
            name="move"
            iterationCount="infinite"
            fillMode="forwards"
          >
            <Button type="primary">hello,world</Button>
          </AnimationElement>

          <AnimationElement
            name="fadeInLeft"
            duration="600ms"
            timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
          >
            <Button type="primary">hello,world</Button>
          </AnimationElement>
          <AnimationElement
            name="fadeInLeft"
            duration="600ms"
            delay="1s"
            timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
          >
            <div
              style={{ display: 'inline-block', width: 100, height: 100, border: '1px solid red' }}
            >
              hello
            </div>
          </AnimationElement>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
};

export default Animation;
