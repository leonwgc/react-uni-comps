import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider, styled, PopMenu, Button } from 'react-uni-comps';
import { useSelector, useUpdateStore } from 'simple-redux-store';
import routes from './RouteConfig';

const StyledBall = styled(Button)`
  position: fixed;
  right: 8px;
  top: ${window.innerHeight / 2.5}px;
  z-index: 1000;
`;

const StyledPopMenu = styled(PopMenu)`
  .list {
    padding: 16px 8px;
    width: 360px;
    display: flex;
    justify-content: space-around;

    .item {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`;

const Routes = () => {
  const { theme } = useSelector((s: any) => s.app);
  const updateStore = useUpdateStore();
  return (
    <div>
      <ThemeProvider color={theme}>
        <HashRouter>
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
        </HashRouter>
      </ThemeProvider>
      <StyledPopMenu
        trigger="click"
        content={
          <div className="list">
            {[
              '#005cff',
              '#00bc70',
              '#f5222d',
              '#1890ff',
              '#fa541b',
              '#13c2c2',
              '#2f54ec',
              '#712fd1',
            ].map((i) => (
              <div
                className="item"
                style={{ background: i }}
                key={i}
                onClick={() => {
                  updateStore({ theme: i });
                }}
              ></div>
            ))}
          </div>
        }
      >
        <StyledBall circle type="primary" />
      </StyledPopMenu>
    </div>
  );
};

export default Routes;
