import React from 'react';
import { AnimationElement, LazyLoadElement, Space, Button } from 'react-uni-comps';
import styled from 'styled-components';
import 'animate.css';
import bird from './images/bird.png';

const StyledDiv = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  margin-top: 10px;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

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

const StyledBird = styled.span`
  background: url(${bird});
  background-size: 100% 100%;
  width: 143px;
  height: 132px;
  display: inline-block;
  @keyframes fly {
    from {
      transform: translate3d(0, 0, 0);
    }

    25% {
      transform: translate3d(0, -20px, 0);
    }

    50% {
      transform: translate3d(0, 0, 0);
    }

    75% {
      transform: translate3d(0, 20px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Animation = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);

  return (
    <Space size={64} wrap>
      {arr.map((item, k) => (
        <AnimationElement
          key={k}
          name="move"
          duration="4s"
          fillMode="both"
          iterationCount="infinite"
        >
          <StyledDiv>{item}</StyledDiv>
        </AnimationElement>
      ))}
      <AnimationElement
        duration="400ms"
        timingFunc="ease-out"
        name="move"
        iterationCount="infinite"
        fillMode="forwards"
      >
        <Button type="primary" size="large">
          hello,world
        </Button>
      </AnimationElement>
      <AnimationElement duration="2s" iterationCount="infinite" timingFunc="linear" name="fly">
        <StyledBird></StyledBird>
      </AnimationElement>

      <AnimationElement
        name="fadeInLeft"
        once={false}
        duration="600ms"
        timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
      >
        <Button type="primary">hello,wgc</Button>
      </AnimationElement>
      <AnimationElement
        name="fadeInLeft"
        duration="600ms"
        delay="1s"
        timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
      >
        <div style={{ display: 'inline-block', width: 100, height: 100, border: '1px solid red' }}>
          hello
        </div>
      </AnimationElement>
      <AnimationElement
        name="fadeInLeft"
        duration="600ms"
        delay="1s"
        timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
      >
        txt no effect
      </AnimationElement>
      <LazyLoadElement width={143} height={132}>
        <AnimationElement
          name="fadeInRight"
          duration="1s"
          once={false}
          timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
        >
          <StyledBird />
        </AnimationElement>
      </LazyLoadElement>
    </Space>
  );
};

export default Animation;
