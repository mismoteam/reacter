import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    flex: 1,
    margin: 0,
    padding: theme.spacing(3),
    width: "100%",
    height: "100%",
    maxWidth: "100%",
  },
  subRoot: {
    flex: 1,
    padding: 0,
    height: "100vh",
  },
  rootDark: {
    background: theme.palette.common.black,
  },
  rootLight: {
    background: theme.palette.common.white,
  },
}));

export default Style;
