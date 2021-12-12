import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, styled, PopMenu, Space } from 'react-uni-comps';
import { useSelector, useUpdateStore } from 'simple-redux-store';
import routes from './RouteConfig';

const StyledSetting = styled.div`
  position: fixed;
  right: 8px;
  top: 8px;
  width: 20px;
  height: 20px;
  border: 4px solid #fff;
  box-shadow: 0 1px 2px 0 rgba(56, 56, 56, 0.15);
  cursor: pointer;
`;

const StyledPopMenu = styled(PopMenu)`
  .list {
    padding: 8px;
    width: 180px;
    display: flex;
    justify-content: space-between;
  }
`;

const Routes = () => {
  const { theme } = useSelector((s) => s.app);
  const updateStore = useUpdateStore();
  return (
    <div style={{ paddingTop: 32 }}>
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
            {['green', 'blue', 'orange', 'purple', 'red'].map((i) => (
              <div
                style={{ background: i, width: 24, height: 24 }}
                key={i}
                onClick={() => {
                  updateStore({ theme: i });
                }}
              ></div>
            ))}
          </div>
        }
      >
        <StyledSetting style={{ background: theme }} />
      </StyledPopMenu>
    </div>
  );
};

export default Routes;
