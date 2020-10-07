import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    margin: 0,
    padding: theme.spacing(3),
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  rootDashboard: {
    paddingTop: theme.spacing(8),
  },
  rootDark: {
    background: theme.palette.common.black,
  },
  rootLight: {
    background: theme.palette.common.white,
  },
}));

export default Style;
