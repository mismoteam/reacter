import { atom } from "recoil";

import StateLoading from "./types";

const ATOM_KEY = "loading";

const loadingDefault: StateLoading = {
  isInProgress: false,
};

/**
 * Loading State - Create or Rehydrate the Atom.
 */
const loadingAtom = atom({
  key: ATOM_KEY,
  default: loadingDefault,
  // @ts-ignore
  persistence_UNSTABLE: {
    type: ATOM_KEY,
  },
});

export default loadingAtom;
