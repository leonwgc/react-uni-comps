import React, { useState, useref, useRef } from 'react';
import { Divider, Popup, Toast } from '../src';
import Picker from '../src/Picker';

export default function App() {
  const [value, setValue] = useState([]);
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
          onChange={(v) => {
            Toast.show(JSON.stringify(v), 1000);
            setValue(v);
          }}
          value={value}
          cols={3}
          data={[
            {
              label: '南京市',
              value: '南京市',
              children: [
                {
                  label: '南京1',
                  value: '南京1',
                  children: [
                    {
                      label: '南京11',
                      value: '南京11',
                    },
                    {
                      label: '南京22',
                      value: '南京22',
                    },
                    {
                      label: '南京33',
                      value: '南京33',
                    },
                    {
                      label: '南京44',
                      value: '南京44',
                    },
                  ],
                },
                {
                  label: '南京2',
                  value: '南京2',
                },
              ],
            },
            {
              label: '无锡市',
              value: '无锡市',
              children: [
                {
                  label: '无锡市1',
                  value: '无锡市1',
                },
                {
                  label: '无锡市2',
                  value: '无锡市2',
                },
              ],
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
