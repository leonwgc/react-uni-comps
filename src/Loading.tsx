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
 *  加载中
 *
 * @param {React.ReactNode} [text='正在提交...']
 */
const show = (text: React.ReactNode = '正在提交...') => {
  Toast.show({
    content: (
      <StyledLoading>
        <Space direction="vertical" size={12} style={{ width: 100 }}>
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
