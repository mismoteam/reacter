// @ts-nocheck
import React, { FC, memo } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";

// Route Components
import Routes from "routes";

const history = createBrowserHistory();

const App: FC = () => (
  <>
    <CssBaseline />
    <Routes history={history} />
  </>
);

export default memo(App);
