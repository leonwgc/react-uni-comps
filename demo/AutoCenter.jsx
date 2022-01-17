import React from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/Block';
import { AutoCenter } from 'react-uni-comps';

export default function App() {
  return (
    <PageWrap>
      <DemoBlock title="内容不够整行宽度时自动居中">
        <AutoCenter>自动居中</AutoCenter>
      </DemoBlock>

      <DemoBlock title="内容达到满宽后保持正常的左对齐">
        <AutoCenter>
          支持基于 Tree Shaking 的按需加载，大部分的构建工具（例如 webpack 4+ 和 rollup）都支持 Tree
          Shaking, 对于不支持 Tree Shaking 的构建工具(e.g. webpack4 以下)，可以采用下列方式按需加载
        </AutoCenter>
      </DemoBlock>
    </PageWrap>
  );
}
