import React, { FC, memo } from "react";

import Standard from "./Standard";
import Centered from "./Centered";

import { Props } from "./types";

const Background: FC<Props> = ({
  children,
  variation = "light",
  type = "standard",
}) => {
  return (
    <>
      {type === "standard" ? (
        <Standard children={children} variation={variation} />
      ) : (
        <Centered children={children} variation={variation} />
      )}
    </>
  );
};

export default memo(Background);
