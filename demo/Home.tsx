import React from 'react';
import { styled, useMount } from 'react-uni-comps';
import particle from './libs/particle';
import config from './libs/config';

const StyledHome = styled.div`
  position: relative;
  margin: -16px -194px -50px -318px;
  height: 100vh;

  .doc-title {
    color: #fff;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate3d(-50%, -50%, 0);
    font-size: 32px;
    user-select: none;
  }

  #particle-effect {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #005cff;
    background-image: url('');
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
`;

export default function Home() {
  useMount(() => {
    particle('particle-effect', config);
  });

  return (
    <StyledHome>
      <div id="particle-effect"></div>
      <div className="doc-title">react-uni-comps online demos & docs</div>
    </StyledHome>
  );
}
