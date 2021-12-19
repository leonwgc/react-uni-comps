import React from 'react';
import PageWrap from './common/PageWrap';
import { Space, Button, styled, Toast, Icon } from 'react-uni-comps';

const StyledContent = styled.div`
  .uc-btn {
    margin: 8px 0;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
`;

const StyButton = styled(Button)`
  width: 63px;
  height: 30px;
  border-radius: 15px;
  font-size: 13px;
  line-height: 30px;
  padding: 0;
`;

export default function App() {
  return (
    <PageWrap>
      <StyledContent>
        <Space wrap>
          <StyButton
            type="primary"
            onClick={() =>
              Toast.show(<span style={{ fontSize: 32, letterSpacing: 5 }}>hello</span>)
            }
          >
            去领取
          </StyButton>
          <Button onClick={() => Toast.show('hello,world')}>hello</Button>
          <Button
            onClick={() =>
              Toast.show({
                content: 'hello,world',
                duration: 1000,
              })
            }
          >
            hello 1s
          </Button>
          <Button disabled>hello</Button>
          <Button disabled type="primary">
            hello
          </Button>
          <Button type="primary" onClick={() => console.log(1)}>
            hello
          </Button>

          <Button type="primary">hello</Button>

          <Button type="primary" loading>
            hello
          </Button>

          <StyledButton type="primary" loading>
            StyledButton
          </StyledButton>

          <Button loading onClick={() => console.log('hello')}>
            hello
          </Button>

          <Button danger>danger default</Button>
          <Button danger disabled>
            danger disabled
          </Button>
          <Button danger type="primary">
            danger primary
          </Button>
          <Button danger type="primary" disabled>
            danger primary disabled
          </Button>
          <Button type="primary" style={{ height: 40 }}>
            hello
          </Button>

          <Button type="primary" danger disabled>
            danger
          </Button>
          <Button type="default" dashed>
            hello
          </Button>

          <Button type="default" circle>
            <Icon type="uc-icon-sousuo" />
          </Button>

          <Button>
            <Icon type="uc-icon-sousuo" />
          </Button>
          <Button type="primary" icon={<Icon type="uc-icon-sousuo" />}>
            搜索
          </Button>

          <Button icon={<Icon type="uc-icon-sousuo" />}>搜索</Button>

          <Button color="#00bc8d">hello</Button>
          <Button color="#00bc8d" dashed>
            hello
          </Button>
          <Button color="#00bc8d" dashed style={{ height: 60 }}>
            hello
          </Button>

          <Button as="a" target="_blank" href="https://www.baidu.com/">
            link button
          </Button>
        </Space>
        <div>
          <Button block style={{ marginBottom: 10 }}>
            hello
          </Button>
          <Button type="primary" block style={{ marginBottom: 10 }}>
            hello
          </Button>
          <Button type="primary" color="#00bc8d" block style={{ height: 40 }}>
            dr
          </Button>
          <Button as="div" block style={{ height: 40 }}>
            as div
          </Button>
          <Button as="div" block loading style={{ height: 40 }}>
            as div
          </Button>
        </div>
        <div style={{ background: '#333', padding: 16 }}>
          <Button block type="primary" ghost color="#00bc8d">
            hello
          </Button>
          <Button ghost> hello</Button>
          <Button ghost block>
            hello
          </Button>
          <Button ghost block type="primary">
            hello
          </Button>
          <Button ghost block type="primary" danger loading>
            danger primary
          </Button>

          <Button ghost block danger>
            danger default
          </Button>
        </div>
      </StyledContent>
    </PageWrap>
  );
}
