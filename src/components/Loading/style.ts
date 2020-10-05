// @ts-nocheck

import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.loading,
    position: "absolute",
    background: "rgba(255,255,255,0.8)",
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
  progressContainer: {
    width: 110,
    height: 110,
    borderRadius: "50%",
    background: theme.palette.common.white,
    border: "1px solid #F5F5F5",
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  progress: {},
}));

export default Style;
