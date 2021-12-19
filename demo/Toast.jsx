import React from 'react';
import PageWrap from './common/PageWrap';
import { Spin, Space, Toast, Button, Icon } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <Space direction="vertical" size={50}>
        <Button type="primary" onClick={() => Toast.show('hello,world')}>
          默认
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: (
                <div>
                  <Space style={{ fontSize: 24 }}>
                    <Spin style={{ color: 'rgba(255,255,255,.5)' }} /> 加载中
                  </Space>
                </div>
              ),
              maskStyle: { backgroundColor: 'red', opacity: 0.1 },
              style: { borderRadius: 8, top: 100 },
            })
          }
        >
          自定义样式
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: (
                <Space
                  direction="vertical"
                  size={12}
                  style={{ width: 120, textAlign: 'center', color: '#fff' }}
                >
                  <Icon type="uc-icon-tick" style={{ fontSize: 40 }} />
                  认证成功
                </Space>
              ),
            })
          }
        >
          自定义内容
        </Button>

        <Button type="primary" onClick={() => Toast.show({ content: '非模态', modal: false })}>
          非模态
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: 'hello,world',
              style: {
                top: 100,
              },
            })
          }
        >
          自定义样式，设置显示位置 top:100px
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: 'hello,world',
              duration: 1000,
              style: {
                top: 'unset',
                bottom: 10,
              },
            })
          }
        >
          自定义样式，设置显示位置 bottom:100px
        </Button>

        <Button
          type="primary"
          onClick={() =>
            Toast.show({
              content: 'hello,world',
              style: {
                top: 'unset',
                bottom: 10,
                background: '#00bc8d',
                width: '80vw',
              },
            })
          }
        >
          自定义样式，背景色，大小
        </Button>
      </Space>
    </PageWrap>
  );
}
