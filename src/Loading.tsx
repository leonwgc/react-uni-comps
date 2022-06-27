/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import Spin from './Spin';
import { attachPropertiesToComponent } from './util';
import Space from './Space';

const StyledLoading = styled.div`
  display: inline-flex;
  width: 124px;
  height: 124px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 15px;

  .uc-spin {
    font-size: 32px;
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
 * @param {React.ReactNode} [text='正在提交...']
 * @param {number} [space=16] 内容和spin距离
 */
const show = (text: React.ReactNode = '正在提交...', space = 16) => {
  Toast.show({
    content: (
      <StyledLoading>
        <Space direction="vertical" size={space} style={{ width: 100 }}>
          <Spin />
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
