import React, { useEffect, useState } from 'react';
import styled from '../src/styled';
import { Image } from 'antd';
import { Space, FileInputTrigger, Button, Icon, ImageViewer } from '../src';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

// company style
const StyledImageUpload = styled.div`
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  width: 108px;
  height: 108px;
  background: #f5f5f5;
  border-radius: 2px;
  border: 1px solid #e4e4e4;
  user-select: none;
  cursor: pointer;

  img {
    max-width: 100%;
    object-fit: cover;
  }

  &.with-image {
    border-style: dashed;

    .change-image-trigger {
      height: 24px;
      line-height: 24px;
      background-color: rgba(0, 0, 0, 0.55);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 108px;
      color: #fff;
      font-size: 12px;
      bottom: -2px;
    }
    .del {
      position: absolute;
      top: 0;
      right: 0;
      width: 14px;
      height: 14px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 0 0 0 12px;
      font-size: 8px;
      color: #fff;
      cursor: pointer;
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function App() {
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState('');
  const [v, setV] = useState(false);

  useEffect(() => {
    if (files.length) {
      getBase64(files[0]).then(setUrl);
    } else {
      setUrl('');
    }
  }, [files]);

  return (
    <Space size={24} wrap>
      {files.length ? (
        <StyledImageUpload className={'with-image'} style={{ overflow: 'hidden' }}>
          <div className="del" onClick={() => setFiles([])}>
            <Icon type="uc-icon-guanbi" />
          </div>
          <img width={108} height={108} src={url} onClick={() => setV(true)} />
          <ImageViewer
            images={[url]}
            visible={v}
            onClose={() => {
              setV(false);
            }}
          />
          <FileInputTrigger
            accept="image/*"
            onChange={(files) => {
              setFiles(files);
            }}
            className="change-image-trigger"
          >
            更换图片
          </FileInputTrigger>
        </StyledImageUpload>
      ) : (
        <FileInputTrigger
          accept="image/*"
          onChange={(files) => {
            setFiles(files);
          }}
        >
          <StyledImageUpload>
            <PlusOutlined
              style={{ width: 20, height: 20, color: '#909399', fontSize: 20, marginTop: 25 }}
            />
            <div style={{ marginTop: 14, color: '#4d4d4d', fontSize: 14 }}>上传图片</div>
          </StyledImageUpload>
        </FileInputTrigger>
      )}

      {/* trigger from outside */}
      <FileInputTrigger
        accept="image/*"
        capture="environment"
        onChange={(files) => {
          setFiles(files);
        }}
      >
        <Button type="primary">调后置拍照</Button>
      </FileInputTrigger>

      <FileInputTrigger
        accept="image/*"
        capture="user"
        onChange={(files) => {
          setFiles(files);
        }}
      >
        <Button type="primary">调前置拍照</Button>
      </FileInputTrigger>

      <Button type="primary" onClick={() => setFiles([])}>
        清除图片
      </Button>
    </Space>
  );
}
