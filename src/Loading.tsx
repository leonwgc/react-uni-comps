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
  width: 124px;
  height: 124px;
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
   * @default 12
   */
  gap?: number;
  /**
   * spin大小
   * @default 40
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
const show = (text?: React.ReactNode, config: Config = { type: 'ball', gap: 12, spinSize: 32 }) => {
  const { type = 'ball', gap = 12, spinSize = 40, containerStyle } = config;

  Toast.show({
    content: (
      <StyledLoading style={containerStyle}>
        <Space direction="vertical" size={text ? gap : 0}>
          <span style={{ fontSize: spinSize, display: 'inline-flex' }}>
            {renderSpin(type, spinSize)}
          </span>
          {text}
        </Space>
      </StyledLoading>
    ),
    duration: 24 * 60 * 60 * 1000,
    style: { padding: 0 },
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
