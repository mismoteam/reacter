import { atom } from "recoil";

import StateUser from "state/user/types";
import { statePersist } from "config/constants";

const ATOM_KEY = "user";

const userDefault: StateUser = {
  email: "",
  firstName: "",
  id: "0",
  lastName: "",
  token: "",
};

/**
 * Get the localStorage persisted state, then rehydrate the atom.
 */
const userPersistedStorage = window.localStorage.getItem(statePersist.key);

const userPersisted = userPersistedStorage
  ? JSON.parse(userPersistedStorage)[ATOM_KEY]
  : userDefault;

/**
 * User State - Create or Rehydrate the Atom.
 */
const userAtom = atom({
  key: ATOM_KEY,
  default: userPersisted,
  // @ts-ignore
  persistence_UNSTABLE: {
    type: ATOM_KEY,
  },
});

export default userAtom;
