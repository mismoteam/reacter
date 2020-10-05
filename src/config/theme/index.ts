// @ts-nocheck

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
  zIndex: {
    loading: 1600,
  },
});

if (process.env.NODE_ENV === "development") {
  console.log("theme", theme);
  console.log("\n");
}

export default theme;
