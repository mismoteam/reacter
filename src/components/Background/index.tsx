import React, { FC, memo } from "react";

import Standard from "./Standard";
import Centered from "./Centered";

import { Props } from "./types";

const Background: FC<Props> = ({
  children,
  variation = "light",
  type = "standard",
  isDashBoard = false,
}) => {
  return (
    <>
      {type === "standard" ? (
        <Standard
          children={children}
          variation={variation}
          isDashBoard={isDashBoard}
        />
      ) : (
        <Centered
          children={children}
          variation={variation}
          isDashBoard={isDashBoard}
        />
      )}
    </>
  );
};

export default memo(Background);
