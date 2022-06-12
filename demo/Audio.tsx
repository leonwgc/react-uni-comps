import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Audio, Avatar } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="">
        <Audio
          autoPlay
          loop
          src="https://m801.music.126.net/20220612145102/a40c28174b28f99d756008ec5ea2ddc0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096515082/1c76/0b9e/523f/8ea9c72edee6b2f0afcdefc1844e300f.m4a"
        >
          <Avatar size={120}>
            <img src="https://img1.baidu.com/it/u=1199725106,526020261&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
          </Avatar>
        </Audio>
      </DemoBlock>
    </PageWrap>
  );
}
