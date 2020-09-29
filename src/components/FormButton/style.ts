import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBotton: theme.spacing(2),
  },
  button: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  progress: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

export default Style;
