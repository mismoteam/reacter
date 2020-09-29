import React, { FC, memo } from "react";
import Box from "@material-ui/core/Box";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { Props } from "./types";
import useStyles from "./style";

const FormInput: FC<Props> = ({ name, control, errors, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Controller
        as={TextField}
        control={control}
        name={name}
        error={errors[name] ? true : false}
        {...props}
      />
      {errors[name] && errors[name].message && (
        <Typography
          className={classes.error}
          variant="caption"
          display="block"
          gutterBottom
        >
          {errors[name].message}
        </Typography>
      )}
    </Box>
  );
};

export default memo(FormInput);
