import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.white,
  },
  rootDark: {
    background: theme.palette.common.black,
    filter: "grayscale()",
  },
  rootLight: {
    background: theme.palette.common.white,
  },
}));

export default Style;
