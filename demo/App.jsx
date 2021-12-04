import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'react-uni-comps';
import routes from './RouteConfig';

const Routes = () => {
  return (
    <ThemeProvider color="#FF5D0D">
      <Router history={history}>
        <Suspense fallback={null}>
          <Switch>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} exact={route.exact} component={route.component} />
            ))}
            <Route render={() => <div>page not found</div>} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
