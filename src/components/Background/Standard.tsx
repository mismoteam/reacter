import React, { FC, memo } from "react";
import Container from "@material-ui/core/Container";

import { Props } from "./standard.types";
import useStyles from "./standard.style";

const Standard: FC<Props> = ({
  children,
  variation = "light",
  isDashBoard = false,
}) => {
  const classes = useStyles();

  const variationClass: string =
    variation === "light" ? classes.rootLight : classes.rootDark;

  const dashBoardClass: string = isDashBoard
    ? `${classes.subRootDashboard} ${variationClass}`
    : variationClass;

  return (
    <Container
      classes={{ root: `${classes.root} ${variationClass}` }}
      maxWidth="sm"
    >
      <Container
        classes={{ root: `${classes.subRoot} ${dashBoardClass}` }}
        maxWidth="sm"
      >
        <>{children}</>
      </Container>
    </Container>
  );
};

export default memo(Standard);
