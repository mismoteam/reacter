import React, { FC } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

import StateLoading from "./types";

import useStyles from "./style";

const Loading: FC<StateLoading> = ({ isInProgress }) => {
  const classes = useStyles();

  if (!isInProgress) {
    return null;
  }

  return (
    <Box className={classes.root} data-testid="id-content-message-progress">
      <Box className={classes.progressContainer}>
        <CircularProgress className={classes.progress} />
      </Box>
    </Box>
  );
};

export default Loading;
