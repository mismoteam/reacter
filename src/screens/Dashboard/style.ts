import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  contentHomeBoxText: {
    fontSize: 11,
  },
  imgLogo: {
    align: "center",
    border: "2px solid #fff",
    borderRadius: theme.shape.borderRadius * 2,
  },
}));

export default Style;
