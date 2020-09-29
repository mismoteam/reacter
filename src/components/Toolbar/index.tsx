import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { default as AppToolbar } from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./style";

const Toolbar = () => {
  const classes = useStyles();

  return (
    <header>
      <AppBar>
        <AppToolbar>
          <Grid container>
            <Grid item xs={12}>
              <Link className={classes.link} to={"/"}>
                <Typography className={classes.title} variant="h6">
                  Reacter
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </AppToolbar>
      </AppBar>
    </header>
  );
};

export default Toolbar;
