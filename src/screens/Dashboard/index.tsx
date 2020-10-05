import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "@apollo/client";
import _get from "lodash.get";

import GQL_GET_CITY_BY_NAME from "graphql/queries/GQL_GET_CITY_BY_NAME";

import { Background } from "components";

import StateLoading from "state/loading/types";
import { loadingAtom, userAtom } from "state";

const Dashboard = () => {
  const { loading, error, data } = useQuery(GQL_GET_CITY_BY_NAME);
  const { firstName, lastName, email } = useRecoilValue(userAtom);
  const { isInProgress } = useRecoilValue(loadingAtom);
  const [, setLoadingAtomState] = useRecoilState<StateLoading>(loadingAtom);

  useEffect(() => {
    if (!data && loading && !isInProgress) {
      setLoadingAtomState({ isInProgress: true });
    } else if (data && !loading && isInProgress) {
      setLoadingAtomState({ isInProgress: false });
    } else if (data && !loading && !isInProgress) {
      setLoadingAtomState({ isInProgress: false });
    }
  }, [data, isInProgress, loading, setLoadingAtomState]);

  if (error) return `Error! ${error.message}`;

  return (
    <Background variation={"dark"}>
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            color="secondary"
            display="block"
            align="center"
            component="h2"
            gutterBottom
          >
            {`Loading: ${isInProgress}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Recoil State
              </Typography>
              <Typography
                variant="body2"
                display="block"
                align="center"
                component="p"
                gutterBottom
              >
                {`${firstName} ${lastName} <${email}>`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {data && (
          <>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    GraphQL Response
                  </Typography>
                  <Typography
                    variant="body2"
                    display="block"
                    align="center"
                    component="p"
                    gutterBottom
                  >
                    {`${_get(
                      data,
                      "getCityByName.weather.summary.description"
                    )}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="caption"
                color="secondary"
                display="block"
                align="center"
              >
                Happy Hacking!!!
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Background>
  );
};

export default Dashboard;
