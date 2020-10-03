import { ThemeOptions, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  custom: {
    zIndex: {
      loading: 3,
    },
  },
} as ThemeOptions);

export default theme;
