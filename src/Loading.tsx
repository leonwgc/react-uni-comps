/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';
import Toast from './Toast';
import Spin from './Spin';
import { attachPropertiesToComponent } from './util';

const StyledLoading = styled.div`
  display: inline-flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  .uc-spin {
    font-size: 42px;
  }
`;

/**
 * 加载中, 只有静态调用
 *
 * @return {*}
 */
function Loading() {}

const show = (content?: React.ReactNode) => {
  Toast.show({
    content: <StyledLoading>{content ? content : <Spin />}</StyledLoading>,
    duration: 24 * 60 * 60 * 1000,
  });
};

const hide = () => {
  Toast.hide();
};

attachPropertiesToComponent(Loading, {
  show,
  hide,
});

export default Loading;
