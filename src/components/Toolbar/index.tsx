import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { default as AppToolbar } from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { Logo } from "components";

import useStyles from "./style";

const Toolbar = () => {
  const classes = useStyles();

  return (
    <header>
      <AppBar className={classes.appBar}>
        <AppToolbar>
          <Grid container>
            <Grid item xs={12}>
              <Link className={classes.link} to={"/"}>
                <Logo variation={"light"} size="small" />
              </Link>
            </Grid>
          </Grid>
        </AppToolbar>
      </AppBar>
    </header>
  );
};

export default Toolbar;
