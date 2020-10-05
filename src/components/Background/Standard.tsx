import React, { FC, memo } from "react";
import Container from "@material-ui/core/Container";

import { Props } from "./standard.types";
import useStyles from "./standard.style";

const Standard: FC<Props> = ({ children, variation = "light" }) => {
  const classes = useStyles();

  const override: string =
    variation === "light" ? classes.rootLight : classes.rootDark;

  return (
    <Container classes={{ root: `${classes.root} ${override}` }} maxWidth="sm">
      <Container
        classes={{ root: `${classes.subRoot} ${override}` }}
        maxWidth="sm"
      >
        <>{children}</>
      </Container>
    </Container>
  );
};

export default memo(Standard);
