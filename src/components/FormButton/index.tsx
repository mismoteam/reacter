import React, { FC, memo } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import { Props } from "./types";
import useStyles from "./style";

const FormButton: FC<Props> = ({ value, isSubmitting = false, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button className={classes.button} {...props}>
        {isSubmitting && <CircularProgress className={classes.progress} />}
        <Typography variant="button" display="block">
          {value}
        </Typography>
      </Button>
    </Box>
  );
};

export default memo(FormButton);
