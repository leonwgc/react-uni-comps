import React from 'react';
import { Spinner, Space } from '../src';

export default function App() {
  return (
    <div className="app">
      <Space wrap>
        <Spinner></Spinner>
        <Spinner size={32}></Spinner>
        <Spinner color="red"></Spinner>
        <Spinner color="red" size={48}></Spinner>
        <Spinner color="#004bcc"></Spinner>
        <Spinner color="#004bcc" size={48}></Spinner>
      </Space>
    </div>
  );
}
