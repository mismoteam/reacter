import React, { FC, memo } from "react";

import logo from "assets/img/logo-light.png";

import { Props } from "./types";
import useStyles from "./style";

const Logo: FC<Props> = ({
  height = 120,
  variation = "light",
  width = 260,
  size = "standard",
}) => {
  const classes = useStyles();

  const override: string =
    variation === "light" ? classes.rootLight : classes.rootDark;

  const imgWidth = size === "standard" ? width : 100;
  const imgHeight = size === "standard" ? height : 30;

  return (
    <img
      className={`${classes.root} ${override}`}
      src={logo}
      width={imgWidth}
      height={imgHeight}
      alt="logo"
    />
  );
};

export default memo(Logo);
