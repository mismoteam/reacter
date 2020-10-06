import React, { FC, memo } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Props } from "./types";

const FormButton: FC<Props> = ({ value, isSubmitting = false, ...props }) => {
  return (
    <Box>
      <Button {...props}>
        {isSubmitting && <CircularProgress />}
        {value}
      </Button>
    </Box>
  );
};

export default memo(FormButton);
