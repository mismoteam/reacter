import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useRecoilValue } from "recoil";
import { useQuery } from "@apollo/client";
import _get from "lodash.get";

import GQL_GET_CITY_BY_NAME from "graphql/queries/GQL_GET_CITY_BY_NAME";

import { Background } from "components";
import { userAtom } from "state";

const Dashboard = () => {
  const { loading, error, data } = useQuery(GQL_GET_CITY_BY_NAME);
  const { firstName, lastName, email } = useRecoilValue(userAtom);

  console.log("=====> loading ", loading);
  console.log("=====> error ", error);
  console.log("=====> data ", _get(data, "getCityByName.weather", []));
  console.log(
    "=====> data.getCityByName.weather ",
    _get(data, "getCityByName.weather", [])
  );
  console.log("\n");

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Background variation={"light"}>
      <Grid container direction="column" alignContent="center">
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            display="block"
            align="center"
            gutterBottom
          >
            Work in Progress
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            display="block"
            align="center"
            gutterBottom
          >
            {firstName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            display="block"
            align="center"
            gutterBottom
          >
            {lastName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            display="block"
            align="center"
            gutterBottom
          >
            {email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" display="block" align="center">
            Happy Hacking!!!
          </Typography>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Dashboard;
