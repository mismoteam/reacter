import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "react-material-ui-carousel";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "@apollo/client";
import _get from "lodash.get";

import logoReact from "assets/img/logo-react.png";
import logoMui from "assets/img/logo-mui.png";
import logoRecoil from "assets/img/logo-recoil.png";
import logoApollo from "assets/img/logo-apollo.png";
import logoReactRouter from "assets/img/logo-react-router.png";
import logoReactHookForm from "assets/img/logo-react-hook-form.png";

import GQL_GET_CITY_BY_NAME from "graphql/queries/GQL_GET_CITY_BY_NAME";

import { Background, Logo } from "components";

import StateLoading from "state/loading/types";
import { loadingAtom, userAtom } from "state";

import useStyles from "./style";

const Dashboard = () => {
  const classes = useStyles();
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

  const items = [
    {
      logo: logoReact,
      width: 260,
      height: 112,
      title: "React",
    },
    {
      logo: logoMui,
      width: 260,
      height: 168,
      title: "Material UI",
    },
    {
      logo: logoApollo,
      width: 260,
      height: 98,
      title: "Apollo GraphQL",
    },
    {
      logo: logoRecoil,
      width: 260,
      height: 88,
      title: "Recoil",
    },
    {
      logo: logoReactRouter,
      width: 260,
      height: 130,
      title: "React Router",
    },
    {
      logo: logoReactHookForm,
      width: 260,
      height: 201,
      title: "React Router",
    },
  ];

  return (
    <Background variation={"dark"} type="standard">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Logo variation={"dark"} />
          </Box>
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
          </>
        )}
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
        <Grid item xs={12}>
          <Carousel autoPlay={true} animation="slide" indicators={true}>
            {items.map((item, i) => (
              <Box display="flex" justifyContent="center" key={i}>
                <img
                  className={classes.imgLogo}
                  src={item.logo}
                  width={item.width}
                  height={item.height}
                  alt={item.title}
                />
              </Box>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Dashboard;
