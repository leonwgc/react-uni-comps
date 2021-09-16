import React, { useState, useref, useRef } from 'react';
import { Space } from '../src';
import Input from '../src/Input';

export default function App() {
  return (
    <div className="app" style={{ margin: '20px' }}>
      <label>name</label> <Input></Input>
    </div>
  );
}
