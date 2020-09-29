import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  message: {
    width: 280,
  },
  progress: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#fafafa",
    paddingBottom: 0,
  },
  title: {
    marginTop: 0,
    marginBottom: theme.spacing(2),
    fontSize: theme.spacing(2),
  },
}));

export default Style;
