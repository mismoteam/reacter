import React, { FC, memo } from "react";
import Container from "@material-ui/core/Container";

import { Props } from "./types";
import useStyles from "./style";

const Background: FC<Props> = ({ children, variation = "light" }) => {
  const classes = useStyles();

  const override: string =
    variation === "light" ? classes.rootLight : classes.rootDark;

  return (
    <Container classes={{ root: `${classes.root} ${override}` }} maxWidth="sm">
      <>{children}</>
    </Container>
  );
};

export default memo(Background);
