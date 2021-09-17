import React, { useState, useref, useRef } from 'react';
import { Divider, Popup } from '../src';
import Picker from '../src/Picker';

export default function App() {
  return (
    <div className="app" style={{ margin: '20px' }}>
      <Popup
        position="bottom"
        style={{
          width: '100%',
        }}
        visible
      >
        <Picker
          onChange={(v) => console.log(v)}
          data={[
            {
              label: '南京市',
              value: '南京市',
            },
            {
              label: '无锡市',
              value: '无锡市',
            },
            {
              label: '海北藏族自治区',
              value: '海北藏族自治区',
            },
            {
              label: '北京市',
              value: '北京市',
            },
            {
              label: '连云港市',
              value: '连云港市',
            },
            {
              label: '浙江市',
              value: '浙江市',
            },
            {
              label: '江苏市',
              value: '江苏市',
            },
          ]}
        />
      </Popup>
    </div>
  );
}
