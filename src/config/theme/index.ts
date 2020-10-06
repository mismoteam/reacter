// @ts-nocheck

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00b6c5",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
  zIndex: {
    loading: 1600,
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: theme.shape.borderRadius,
    },

    containedPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      textTransform: "uppercase",
      fontWeight: "normal",
      padding: "12px 18px",
      textShadow: "none",
      fontSize: 24,
      lineHeight: "1.5em",
      "&:hover": {
        backgroundColor: "#00cad8",
      },
    },
  },
  MuiTypography: {
    root: {
      color: theme.palette.common.dark,
      "& h1": {
        color: theme.palette.primary.main,
      },
      "& h2": {
        color: theme.palette.primary.main,
      },
      "& h3": {
        color: theme.palette.primary.main,
      },
      "& h4": {
        color: theme.palette.primary.main,
      },
      "& h5": {
        color: theme.palette.primary.main,
      },
    },
  },
};

if (process.env.NODE_ENV === "development") {
  console.log("theme", theme);
  console.log("\n");
}

export default theme;
