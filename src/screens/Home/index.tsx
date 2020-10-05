import React, { memo } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { Background, Logo } from "components";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();

  return (
    <Background variation={"light"} type="centered">
      <Grid container>
        <Grid item xs={12}>
          <Grid container direction="column" alignContent="center">
            <Grid item xs={12}>
              <Link to="/login">
                <Logo variation={"light"} />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography
                  className={classes.contentHomeBoxText}
                  variant="caption"
                  display="block"
                  align="center"
                >
                  Use Reacter to easily kick off your React Apps
                  <span role="img" aria-labelledby="heart">
                    ❤️
                  </span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Background>
  );
};

export default memo(Home);
