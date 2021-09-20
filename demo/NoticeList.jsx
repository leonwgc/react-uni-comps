import React, { useState } from 'react';
import { SoundOutlined } from '@ant-design/icons';
import { NoticeList, Button } from '../src';

export default function App() {
  const [list, setList] = useState(['通知1', '通知2', '通知3', '通知4']);
  return (
    <div className="app">
      <NoticeList
        icon={<SoundOutlined />}
        closeable
        extra={
          <div>
            <SoundOutlined /> hello
          </div>
        }
        list={list}
      />

      <Button
        style={{ marginTop: 30 }}
        type="primary"
        onClick={() => {
          list.push('111', '222', '333');
          setList([...list]);
        }}
      >
        add more data
      </Button>
    </div>
  );
}
