import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Background } from "components";
import { ContentMessage } from "components";

import { Props } from "./types";
import useStyles from "./style";

const ErrorPage: FC<Props> = ({ error, status }) => {
  const classes = useStyles();

  return (
    <Background variation={"light"}>
      <Link className={classes.link} to={"/"}>
        <ContentMessage
          type="message"
          title={status ? `API Status - ${status}` : "Page Status"}
          description={error ? `${error}.` : "Not Found!"}
        />
      </Link>
    </Background>
  );
};

export default ErrorPage;
