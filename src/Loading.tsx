import React from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import { attachPropertiesToComponent } from './util';
import Space from './Space';
import BallSpin from './BallSpin';
import Spin from './Spin';

const StyledLoading = styled.div`
  display: inline-flex;
  width: 124px;
  height: 124px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 15px;

  .uc-ball-spin {
    font-size: 32px;
  }

  .uc-spin {
    font-size: 40px;
  }
`;

/**
 * 加载中, 只有静态调用
 *
 * @return {*}
 */
const Loading: React.FC = () => {
  return null;
};

/**
 * Toast show loading with text
 *
 * @param {React.ReactNode} [text='Loading...']
 * @param {number} [type=ball | wechat] 风格
 * @param {number} [space=16] 内容和spin距离
 *
 */
const show = (
  text: React.ReactNode = 'Loading...',
  type: 'ball' | 'wechat' = 'ball',
  space = 16
) => {
  Toast.show({
    content: (
      <StyledLoading>
        <Space direction="vertical" size={space} style={{ width: 100 }}>
          {type == 'ball' ? <BallSpin /> : <Spin />}
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
  /** show loading with text */
  show,
  /** hide loading */
  hide,
});
