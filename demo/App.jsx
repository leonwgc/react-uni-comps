import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, styled, PopMenu } from 'react-uni-comps';
import { useSelector, useUpdateStore } from 'simple-redux-store';
import routes from './RouteConfig';

const StyledSetting = styled.div`
  position: fixed;
  right: 8px;
  top: ${window.innerHeight / 2.5}px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 1px 2px 0 rgba(56, 56, 56, 0.15);
  cursor: pointer;
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
  const { theme } = useSelector((s) => s.app);
  const updateStore = useUpdateStore();
  return (
    <div>
      <ThemeProvider color={theme}>
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
      <StyledPopMenu
        trigger="click"
        content={
          <div className="list">
            {['#00bc70', '#1890ff', '#f5222d', '#fa541b', '#13c2c2', '#2f54ec', '#712fd1'].map(
              (i) => (
                <div
                  className="item"
                  style={{ background: i }}
                  key={i}
                  onClick={() => {
                    updateStore({ theme: i });
                  }}
                ></div>
              )
            )}
          </div>
        }
      >
        <StyledSetting style={{ background: theme }} />
      </StyledPopMenu>
    </div>
  );
};

export default Routes;
