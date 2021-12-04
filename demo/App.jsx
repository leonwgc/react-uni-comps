import React, { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './RouteConfig';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';
import { ThemeProvider } from 'react-uni-comps';
import './App.less';

dayjs.locale('zh-cn');

const Routes = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <ThemeProvider color="#FF5D0D">
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
  );
};

export default Routes;
