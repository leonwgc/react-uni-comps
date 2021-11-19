import React, { useEffect } from 'react';
import { Spinner, Space } from '../src';
import { CSSTransition, Transition, TransitionGroup } from '../src/transition';

export default function App() {
  return (
    <div className="app">
      <Space wrap>
        <Spinner style={{ color: 'red', fontSize: 30, margin: '0 20px' }}></Spinner>
        <Spinner size={32}></Spinner>
        <Spinner color="red"></Spinner>
        <Spinner color="red" size={48}></Spinner>
        <Spinner color="#004bcc"></Spinner>
        <Spinner color="#004bcc" size={48}></Spinner>
      </Space>
    </div>
  );
}
