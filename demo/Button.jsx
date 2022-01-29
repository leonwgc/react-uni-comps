import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { Space, Button, Icon, Toast } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="不同类型的按钮">
        <Space wrap>
          <Button>Default</Button>
          <Button outlined>Outlined</Button>
          <Button type="primary">Primary</Button>
          <Button danger onClick={() => Toast.show('danger')}>
            Danger
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="块级按钮">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button block>Block default</Button>
          <Button block type="primary">
            Block primary
          </Button>
          <Button block danger dashed>
            Block danger
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="加载状态">
        <Space wrap>
          <Button loading>加载中</Button>
          <Button type="primary" loading>
            加载中
          </Button>
          <Button type="primary" danger loading>
            Loading
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="带图标的按钮">
        <Space wrap>
          <Button>
            <Space>
              <Icon type="uc-icon-sousuo" />
              <span>搜索</span>
            </Space>
          </Button>
          <Button circle>
            <Icon type="uc-icon-sousuo" />
          </Button>

          <Button circle type="primary">
            <Icon type="uc-icon-sousuo" />
          </Button>

          <Button>
            <Icon type="uc-icon-sousuo" />
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="按钮形状">
        <Space wrap>
          <Button>Default Button</Button>
          <Button block style={{ borderRadius: 20 }}>
            Rounded Button
          </Button>
          <Button block style={{ borderRadius: 0 }}>
            Rect Button
          </Button>
          <Button circle>
            <Icon type="uc-icon-guanbi" />
          </Button>
          <Button type="primary">Default Button</Button>
          <Button type="primary" style={{ borderRadius: 20 }}>
            Rounded Button
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="幽灵按钮" background="#333">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button block ghost>
            default
          </Button>

          <Button block ghost type="primary">
            primary
          </Button>

          <Button ghost block danger dashed>
            danger dashed
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="链接按钮">
        <Space wrap size={16}>
          <Button as="a">Anchor</Button>
          <Button as="a" style={{ color: '#333', textDecoration: 'underline' }}>
            Anchor
          </Button>
          <Button as="a" danger>
            Anchor danger
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="禁用状态">
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button disabled type="primary">
            Disabled
          </Button>

          <Button disabled danger>
            Disabled
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="防止重复click">
        <Space wrap>
          <Button
            wait
            onClick={() => {
              console.log(1);
            }}
          >
            1s内点一次
          </Button>

          <Button
            outlined
            wait={2000}
            onClick={() => {
              console.log(2);
            }}
          >
            2s内点一次
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
