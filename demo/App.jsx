import React, { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, configureStore } from 'simple-redux-store';
import routes from './RouteConfig';

import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';
import { ThemeProvider } from 'styled-components';
import './App.less';

dayjs.locale('zh-cn');
const store = configureStore();

const Routes = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <ThemeProvider theme={{ color: '#00bc8d' }}>
          <Router history={history}>
            <Suspense fallback={null}>
              <Switch>
                {routes.map((route, idx) => (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
                <Route render={() => <div>page not found</div>} />
              </Switch>
            </Suspense>
          </Router>
        </ThemeProvider>
      </ConfigProvider>
    </Provider>
  );
};

export default Routes;
