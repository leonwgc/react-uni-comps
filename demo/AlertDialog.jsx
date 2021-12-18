import React from 'react';
import PageWrap from './common/PageWrap';
import MobileTip from './common/MobileTip';
import { AlertDialog, Button, Toast, Divider, Icon, Space, ThemeProvider } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <MobileTip />
      <Divider textPosition="left">只包含确定按钮, 代替window.alert</Divider>
      <Button
        onClick={() =>
          AlertDialog.show({
            title: '提示',
            content: '确定要这么做吗',
            confirmText: '决定了',
            onConfirm: () => Toast.show('你点击了确定'),
          })
        }
      >
        模拟window.alert
      </Button>

      <Divider textPosition="left">包含确认和取消按钮,代替window.confirm</Divider>
      <Button
        onClick={() =>
          AlertDialog.show({
            title: '提示',
            content: '确定要这么做吗',
            onConfirm: () => Toast.show('你点击了确定'),
            cancelText: '取消',
            onCancel: () => Toast.show('你点击了取消'),
          })
        }
      >
        模拟window.confirm
      </Button>

      <Divider textPosition="left">自定义样式</Divider>
      <Button
        onClick={() =>
          AlertDialog.show({
            title: '提示',
            content: (
              <Space style={{ textAlign: 'center', color: 'red', fontSize: 18 }}>
                <Icon type="uc-icon-jinggao" />
                确定要这么做吗
              </Space>
            ),
            confirmText: '决定了',
            onConfirm: () => Toast.show('你点击了确定'),
          })
        }
      >
        模拟window.alert
      </Button>
    </PageWrap>
  );
}
