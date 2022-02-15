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
  line-height: 1.15;
  border-radius: 4px;
  min-width: 80px;
  min-height: 80px;
  font-size: 16px;
`;

type StaticProps = {
  /** 显示loading */ show: (content?: React.ReactNode) => void;
  /** 隐藏loading */ hide: () => void;
};

/** 加载Loading */
const Loading: React.FC<Props> & Partial<StaticProps> = ({ content, ...restProps }) => {
  return (
    <StyledLoading
      visible
      {...restProps}
      content={content ? content : <Spin style={{ fontSize: 36 }} />}
    ></StyledLoading>
  );
};

let _hide = null;

const show = (content?: React.ReactNode) => {
  const container = document.createElement('div');

  const dispose: Dispose = renderElement(
    <Loading className="uc-loading" content={content}></Loading>,
    container
  );

  _hide?.();
  _hide = dispose;
};

const hide = () => _hide?.();

attachPropertiesToComponent(Loading, {
  show,
  hide,
});

export default Loading;
