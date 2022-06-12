import React, { useRef, useImperativeHandle, useState } from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import useEventListener from './hooks/useEventListener';

const rotate = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledWrap = styled.div`
  display: inline-flex;
  position: relative;
  &.playing {
    animation: ${rotate} 3.6s linear;
    animation-iteration-count: infinite;
  }

  audio {
    display: none;
  }
`;

type Props = React.HTMLAttributes<HTMLAudioElement> & {
  /**
   * 音频地址
   */
  src?: string;
  /**
   * 是否自动播放
   * @default true
   */
  autoPlay?: boolean;
  /**
   * 是否预加载语音
   * @default auto
   */
  preload?: string;
  /**
   * 是否循环播放
   */
  loop?: boolean;
};

/** 音频播放器 */
const Audio = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, preload = 'auto', loop, src, style, ...rest } = props;
  const wrapRef = useRef<HTMLDivElement>();
  const audioRef = useRef<HTMLAudioElement>();
  useImperativeHandle(ref, () => wrapRef.current);
  const [playing, setPlaying] = useState(false);

  useEventListener(audioRef, 'play', () => setPlaying(true));
  useEventListener(audioRef, 'pause', () => setPlaying(false));

  return (
    <StyledWrap
      ref={wrapRef}
      className={clsx('uc-audio', className, { playing: playing })}
      style={style}
      onClick={() => {
        if (playing) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
      }}
    >
      <audio {...rest} ref={audioRef} src={src} preload={preload} loop={loop}></audio>
      {children}
    </StyledWrap>
  );
});

Audio.displayName = 'UC-Audio';

export default Audio;
