import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: green[500],
    },
    warning: {
      main: green[500],
    },
    info: {
      main: green[500],
    },
    success: {
      main: green[500],
    },
  },
  // Centralized zIndex definitions.
  zIndex: {},
});

export default theme;
