// @ts-nocheck
import React, { FC, memo } from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";

import { createClient } from "graphql/client";
import { Loading } from "components";

// Route Components
import Routes from "routes";

import { useRecoilValue } from "recoil";
import { loadingAtom, userAtom } from "state";

import theme from "config/theme";

const client = createClient();
const history = createBrowserHistory();

const App: FC = () => {
  /**
   * Because Recoil doesn't see the atoms if it is not in App tree
   * and we are using lazy loading for any route component using atoms.
   *
   * Please put all your `statePersist` atoms here:
   */
  const { isInProgress } = useRecoilValue(loadingAtom);
  useRecoilValue(userAtom);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Loading isInProgress={isInProgress} />
          <Routes history={history} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default memo(App);
