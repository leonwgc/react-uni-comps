import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Space, Switch, FileInputTrigger, Button } from '../src';
import { PlusOutlined, CloseCircleOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import './Upload.less';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const StyledImageUpload = styled.div`
  display: inline-flex;
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px solid #e4e4e4;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 24px;
  user-select: none;

  img {
    max-width: 100%;
    object-fit: contain;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 16px;
    transform: translate(50%, -50%);
    cursor: pointer;
  }
`;

export default function App() {
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
    <Space>
      {files.length === 0 ? (
        <FileInputTrigger
          accept="images/*"
          onChange={(files) => {
            console.log(files);
            setFiles(files);
          }}
        >
          <StyledImageUpload>+</StyledImageUpload>
        </FileInputTrigger>
      ) : (
        <StyledImageUpload>
          <CloseCircleOutlined
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              setFiles([]);
            }}
          />
          <img src={url} />
        </StyledImageUpload>
      )}

      {files.length ? (
        <div className={clsx('upload1', 'img')}>
          <CloseCircleOutlined
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              setFiles([]);
            }}
          />
          <img src={url} />
        </div>
      ) : (
        <div className="upload1">
          <FileInputTrigger
            accept="images/*"
            onChange={(files) => {
              console.log(files);
              setFiles(files);
            }}
          >
            <PlusOutlined className="plus" />
          </FileInputTrigger>
          <div>上传图片</div>
        </div>
      )}
    </Space>
  );
}
