import React, { useRef } from 'react';
import typer from 'typer-js';
import { styled, useMount } from 'react-uni-comps';
import './Home.less';

const StyledHome = styled.div`
  background-color: #fff;
  display: flex;
  height: 100vh;
  width: 100%;
  padding-top: 160px;
  justify-content: center;
  font-size: 40px;
  color: #005cff;
  text-align: center;

  .desc {
    font-size: 20px;
    color: #666;
  }
`;

export default function Home() {
  const ref = useRef();

  useMount(() => {
    typer(ref.current)
      .line(`<span class='title'>&#9834; react-uni-comps</span>`)
      .cursor(false)
      .line(`<span class='desc'>在线文档</span>`);
  });

  return (
    <StyledHome>
      <div ref={ref}></div>
    </StyledHome>
  );
}
