import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Space, Button, Icon } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="不同类型的按钮">
        <Space wrap>
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button outlined>Outlined</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="块级按钮 (block)">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button block>Block</Button>
          <Button block type="primary">
            Block
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="加载状态 (loading)">
        <Space wrap>
          <Button type="primary" loading></Button>
          <Button loading></Button>
          <Button loading>loading</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="带图标的按钮 (icon)">
        <Space wrap>
          <Button circle type="primary" icon={<Icon type="uc-icon-sousuo" />}></Button>
          <Button icon={<Icon type="uc-icon-sousuo" />}></Button>
          <Button circle icon={<Icon type="uc-icon-sousuo" />}></Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="幽灵按钮 (ghost)" background="#333">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button block ghost>
            default
          </Button>

          <Button block ghost type="primary">
            primary
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="链接按钮 (as='a')">
        <Space wrap>
          <Button as="a">Anchor</Button>
          <Button as="a" style={{ color: '#333', textDecoration: 'underline' }}>
            Anchor
          </Button>
          <Button as="a" danger>
            Anchor danger
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="禁用状态 (disabled)">
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button disabled type="primary">
            Disabled
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="防止重复点击 (wait)">
        <Space>
          <Button wait>1s点一次</Button>

          <Button type="primary" wait={2000}>
            2s点一次
          </Button>
        </Space>
      </DemoBlock>
    </PageWrap>
  );
}
