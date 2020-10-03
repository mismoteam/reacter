// Globals
export const IS_SERVER = false;

export const GRAPHQL = process.env.REACT_APP_GRAPHQL;
export const WSS = process.env.REACT_APP_WSS;
export const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;

export const statePersist = {
  key: "appState",
  atomsToPersist: ["loading", "user"],
};

if (process.env.NODE_ENV === "development") {
  console.log("\n");
  console.log("NODE_ENV          ", process.env.NODE_ENV);
  console.log("IS_SERVER         ", IS_SERVER);
  console.log("GRAPHQL           ", GRAPHQL);
  console.log("WSS               ", WSS);
  console.log("STORAGE_KEY       ", STORAGE_KEY);
  console.log("\n");
}
