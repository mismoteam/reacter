// @ts-nocheck
import React, { FC, Suspense, lazy, memo } from "react";
import { Route, Router, Switch } from "react-router-dom";

import { ErrorHandler } from "context/ErrorHandler";
import { Progress } from "components";

// Route Components
const routes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("screens/Home")),
  },
  {
    exact: true,
    path: "/login",
    component: lazy(() => import("screens/Login")),
  },
  {
    exact: true,
    path: "/dashboard",
    component: lazy(() => import("screens/Dashboard")),
  },
  {
    component: lazy(() => import("screens/ErrorPage")),
  },
];

const Routes: FC = ({ history }) => {
  return (
    <div>
      <Suspense fallback={<Progress />}>
        <Router history={history}>
          <ErrorHandler>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </ErrorHandler>
        </Router>
      </Suspense>
    </div>
  );
};

export default memo(Routes);
