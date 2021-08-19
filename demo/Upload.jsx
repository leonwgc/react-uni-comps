import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Space, FileInputTrigger, Button } from '../src';
import { PlusOutlined, CloseCircleOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { upload } from 'xhr-fetch-lib';
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
            setFiles(files);
            const file = files[0];

            upload(
              'https://t-api.xxx.com/api/customer/v2/attach/upload4NoLogin',
              {
                storeType: 'I',
                type: '29',
                creator: 'system',
              },
              file
            ).then(({ responseText }) => {
              try {
                const res = JSON.parse(responseText);
                setUrl(res.result[0].href);
              } catch (ex) {}
            });
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
              setFiles(files);
            }}
          >
            <PlusOutlined className="plus" />
          </FileInputTrigger>
          <div>上传图片</div>
        </div>
      )}

      <FileInputTrigger
        onChange={(files) => {
          setFiles(files);
        }}
      >
        <Button type="primary">trigger upload</Button>
      </FileInputTrigger>
    </Space>
  );
}
