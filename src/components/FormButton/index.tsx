import React, { FC, memo } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Props } from "./types";
import useStyles from "./style";

const FormButton: FC<Props> = ({ value, isSubmitting = false, ...props }) => {
  const classes = useStyles();

  return (
    <Box>
      <Button {...props}>
        {isSubmitting && (
          <CircularProgress className={classes.circularProgress} />
        )}
        {value}
      </Button>
    </Box>
  );
};

export default memo(FormButton);
