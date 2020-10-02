// @ts-nocheck
import React, { FC, memo } from "react";
import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";

import { createClient } from "graphql/client";

// Route Components
import Routes from "routes";

import { useRecoilValue } from "recoil";
import userAtom from "./state/user/atoms";

const client = createClient();
const history = createBrowserHistory();

const App: FC = () => {
  /**
   * Because Recoil doesn't see the atoms if it is not in App tree
   * and we are using lazy loading for any route component using atoms.
   *
   * Please put all your `statePersist` atoms here:
   */
  useRecoilValue(userAtom);

  return (
    <>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Routes history={history} />
      </ApolloProvider>
    </>
  );
};

export default memo(App);
