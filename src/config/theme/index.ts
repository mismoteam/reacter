// @ts-nocheck

import { createMuiTheme } from "@material-ui/core/styles";

export const customTheme = {
  primary: "#00b6c5",
  primaryHover: "#00cad8",
  secondary: "#3f51b5",
  typographyFontColor: "#000",
  commonWhite: "#fff",
};

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: customTheme.primary,
    },
    secondary: {
      main: customTheme.secondary,
    },
  },
  zIndex: {
    loading: 1600,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 3,
      },
      containedPrimary: {
        backgroundColor: customTheme.primary,
        color: customTheme.commonWhite,
        textTransform: "uppercase",
        fontWeight: "normal",
        padding: "12px 18px",
        textShadow: "none",
        fontSize: 24,
        lineHeight: "1.5em",
        "&:hover": {
          backgroundColor: customTheme.primaryHover,
        },
      },
    },
    MuiTypography: {
      root: {
        color: customTheme.typographyFontColor,
      },
    },
  },
});

if (process.env.NODE_ENV === "development") {
  console.log("theme", theme);
  console.log("\n");
}

export default theme;
