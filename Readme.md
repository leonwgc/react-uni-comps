react 轻松接入 qiankun 微前端

1. 安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install simple-react-qiankun
yarn add simple-react-qiankun
```

2. 使用

```js
import React from 'react';
import QKMicroAppRender from 'simple-react-qiankun';

const App = () => {
  return (
    <QKMicroAppRender
      app={{
        entry: '//localhost:3002/pc.html#/afr',
      }}
    />
  );
};

export default App;
```

3. 类型定义

```js
import { ReactElement } from 'react';
import { Entry, FrameworkConfiguration } from 'qiankun';

declare type QKMicroAppRenderProps = {
    app: {
        name?: string;
        entry: Entry;
        props?: Record<string, unknown>;
    };
    configuration?: FrameworkConfiguration;
};

declare const QKMicroAppRender: ({ app, configuration }: QKMicroAppRenderProps) => ReactElement;

export default QKMicroAppRender;


```

4. 文档参考 [https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration](https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration)

5. 注意 app 参数 container 不需要，QKMicroAppRender 作为 container host 资源
