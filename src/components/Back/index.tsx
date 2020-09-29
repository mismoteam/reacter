import React, { FC, memo } from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const Back: FC = () => {
  const history = useHistory();

  const handleOnClick = () => history.goBack();

  return (
    <IconButton aria-label="delete" onClick={handleOnClick}>
      <Icon />
    </IconButton>
  );
};

export default memo(Back);
