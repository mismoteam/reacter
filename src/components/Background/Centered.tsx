import React, { FC, memo } from "react";
import Container from "@material-ui/core/Container";

import { Props } from "./centered.types";
import useStyles from "./centered.style";

const Background: FC<Props> = ({
  children,
  variation = "light",
  isDashBoard = false,
}) => {
  const classes = useStyles();

  const variationClass: string =
    variation === "light" ? classes.rootLight : classes.rootDark;

  const dashBoardClass: string = isDashBoard
    ? `${classes.rootDashboard} ${variationClass}`
    : variationClass;

  return (
    <Container
      classes={{ root: `${classes.root} ${dashBoardClass}` }}
      maxWidth="sm"
    >
      <>{children}</>
    </Container>
  );
};

export default memo(Background);
