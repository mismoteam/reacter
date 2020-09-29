import React, { FC, memo } from "react";

import logo from "../../assets/img/logo-light.png";

import { Props } from "./types";
import useStyles from "./style";

const Logo: FC<Props> = ({
  height = 120,
  variation = "light",
  width = 260,
}) => {
  const classes = useStyles();

  const override: string =
    variation === "light" ? classes.rootLight : classes.rootDark;

  return (
    <img
      className={`${classes.root} ${override}`}
      src={logo}
      width={width}
      height={height}
      alt="logo"
    />
  );
};

export default memo(Logo);
