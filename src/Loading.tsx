import React from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import { attachPropertiesToComponent } from './util';
import Space from './Space';
import BallSpin from './BallSpin';
import Spin from './Spin';
import RoundSpin from './RoundSpin';
import ClockSpin from './ClockSpin';

const StyledLoading = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

/**
 * 加载中, 只有静态调用
 *
 * @return {*}
 */
const Loading: React.FC = () => {
  return null;
};

type Config = {
  /**
   * spin 类型
   * @default ball
   */
  type?: 'ball' | 'spin' | 'round' | 'clock';
  /**
   * spin和内容间距
   * @default 6
   */
  gap?: number;
  /**
   * spin大小
   * @default 32
   */
  spinSize?: number;
  /**
   * 容器样式
   */
  containerStyle?: React.CSSProperties;
};

const renderSpin = (type, size) => {
  switch (type) {
    case 'ball': {
      return <BallSpin />;
    }
    case 'spin': {
      return <Spin />;
    }
    case 'round': {
      return <RoundSpin size={size} />;
    }
    case 'clock': {
      return <ClockSpin size={size} />;
    }
  }
};

/**
 * @description 显示Loading 提示
 * @param {React.ReactNode} text
 * @param {Config} config
 */
const show = (text?: React.ReactNode, config: Config = { type: 'ball', gap: 6, spinSize: 32 }) => {
  const { type = 'ball', gap = 6, spinSize = 32, containerStyle } = config;

  const size = text ? 120 : 80;

  Toast.show({
    content: (
      <StyledLoading>
        {text ? (
          <Space direction="vertical" size={gap}>
            <span style={{ fontSize: spinSize, display: 'inline-flex' }}>
              {renderSpin(type, spinSize)}
            </span>
            {text}
          </Space>
        ) : (
          <span style={{ fontSize: spinSize, display: 'inline-flex' }}>
            {renderSpin(type, spinSize)}
          </span>
        )}
      </StyledLoading>
    ),
    duration: 24 * 60 * 60 * 1000,
    style: { width: size, height: size, padding: 0, ...containerStyle },
  });
};

const hide = () => {
  Toast.hide();
};

export default attachPropertiesToComponent(Loading, {
  /** 显示loading */
  show,
  /** 隐藏loading */
  hide,
});
