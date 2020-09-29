import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  goBack: {
    position: "absolute",
    left: 0,
    top: 0,
    margin: theme.spacing(3),
  },
  formLoginError: {
    color: theme.palette.error.main,
    padding: theme.spacing(2),
    paddingBottom: 0,
  },
}));

export default Style;
