// @flow
import React, { Suspense } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

//components
import Loader from "components/Loader";

import routes from "./route.config";

const hasAuth = () => localStorage.hasOwnProperty("userToken");

const authPath = "/login";

const Routes = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            render={props => {
              if (route.authentication && route.path !== authPath) {
                if (hasAuth()) {
                  return <route.component {...props} routes={route.routes} />;
                }
                if (!hasAuth()) return <Redirect to="/login" />;
              }
              if (!route.authentication) {
                if (route.path === authPath) {
                  if (hasAuth()) return <Redirect to="/home" />;
                  if (!hasAuth()) return <route.component {...props} />;
                } else if (route.default) {
                  if (hasAuth()) return <Redirect to="/home" />;
                  if (!hasAuth()) return <Redirect to="/login" />;
                } else {
                  return <route.component {...props} />;
                }
              }
            }}
          />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
