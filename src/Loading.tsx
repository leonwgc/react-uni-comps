import React from 'react';
import styled from 'styled-components';
import Toast, { Props } from './Toast';
import Spin from './Spin';
import { attachPropertiesToComponent } from './util';
import { Dispose, renderElement } from './dom';

const StyledLoading = styled(Toast)`
  display: inline-flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: 4px;
`;

type StaticProps = {
  /** 显示loading */ show: () => void;
  /** 隐藏loading */ hide: () => void;
};

/** 加载Loading */
const Loading: React.FC<Props> & Partial<StaticProps> = (props) => {
  return <StyledLoading {...props} content={<Spin />}></StyledLoading>;
};

let _hide = null;

const show = () => {
  const container = document.createElement('div');

  const dispose: Dispose = renderElement(<Loading visible className="uc-loading" />, container);

  _hide?.();
  _hide = dispose;
};

const hide = () => _hide?.();

attachPropertiesToComponent(Loading, {
  show,
  hide,
});

export default Loading;
