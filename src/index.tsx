// @ts-nocheck
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import recoilPersist from "recoil-persist";

import { statePersist } from "config/constants";

import "./index.css";
import App from "./App";

/**
 * Setup a Fake Backend.
 */
import configureFakeBackendUtil from "./_backend/utils/configure.fake.backend.js";
configureFakeBackendUtil();

const { RecoilPersist, updateState } = recoilPersist(
  statePersist.atomsToPersist,
  {
    key: statePersist.key,
    storage: localStorage,
  }
);

ReactDOM.render(
  <StrictMode>
    <RecoilRoot initializeState={updateState}>
      <RecoilPersist />
      <App />
    </RecoilRoot>
  </StrictMode>,
  document.getElementById("root")
);
