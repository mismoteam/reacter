import { atom } from "recoil";

import StateUser from "./types";

const ATOM_KEY = "user";

const userDefault: StateUser = {
  email: "",
  firstName: "",
  id: "0",
  lastName: "",
  token: "",
};

/**
 * User State - Create or Rehydrate the Atom.
 */
const userAtom = atom({
  key: ATOM_KEY,
  default: userDefault,
  // @ts-ignore
  persistence_UNSTABLE: {
    type: ATOM_KEY,
  },
});

export default userAtom;
