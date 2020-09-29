import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
}));

export default Style;
