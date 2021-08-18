import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Space, Switch, Upload } from '../src';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const StyledContent = styled.div`
  div {
    margin: 8px 0;
  }
`;

export default function App() {
  const [c, setC] = useState(false);
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (files.length) {
      getBase64(files[0]).then(setUrl);
    } else {
      setUrl('');
    }
  }, [files]);

  return (
    <StyledContent>
      <Space wrap>
        <Switch checked={c} onChange={setC} />
        {c ? 'checked' : 'unchecked'}
        <Switch checked />
        <Switch defaultChecked />
        <Switch defaultChecked disabled />
        <Switch disabled />
        <Switch color="#00bc8d" defaultChecked />
        <Switch disabled color="#00bc8d" defaultChecked />
      </Space>

      <Upload
        accept="images/*"
        onChange={(files) => {
          console.log(files);
          setFiles(files);
        }}
        className="dog"
        style={{
          display: 'inline-flex',
          position: 'relative',
          width: 200,
          height: 200,
          border: '1px solid #e4e4e4',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#666',
          fontSize: 24,
        }}
      >
        {url ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setFiles([]);
            }}
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              transform: 'translate(50%,-50%)',
              fontSize: 14,
              color: '#e4e4e4',
            }}
          >
            <CloseOutlined />
          </div>
        ) : null}
        {files.length ? <img src={url} /> : <PlusOutlined />}
      </Upload>
    </StyledContent>
  );
}
