// @ts-nocheck
import React, { FC, memo } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";

// Route Components
import Routes from "routes";

import { useRecoilValue } from "recoil";
import userAtom from "./state/user/atoms";

const history = createBrowserHistory();

const App: FC = () => {
  const value = useRecoilValue(userAtom);
  return (
    <>
      <CssBaseline />
      <Routes history={history} />
    </>
  );
};

export default memo(App);
