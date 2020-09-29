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
  /**
   * Because Recoil doesn't see the atoms if it is not in app tree.
   * And we are using lazy loading for each module so user atom.
   *
   * Please put all your `statePersist` atoms here:
   */
  useRecoilValue(userAtom);

  return (
    <>
      <CssBaseline />
      <Routes history={history} />
    </>
  );
};

export default memo(App);
