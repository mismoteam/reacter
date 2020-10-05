import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { yupResolver } from "@hookform/resolvers";

import { Back, Background, Logo, FormInput, FormButton } from "components";
import { authenticationService } from "services";

import { FormLoginInputs } from "./types";
import { loginFormSchema } from "./validation";

import StateLoading from "state/loading/types";
import StateUser from "state/user/types";
import { loadingAtom, userAtom } from "state";

import useStyles from "./style";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [, setUserAtomState] = useRecoilState<StateUser>(userAtom);
  const [, setLoadingAtomState] = useRecoilState<StateLoading>(loadingAtom);
  const { isInProgress } = useRecoilValue(loadingAtom);

  const [formLoginError, setFormLoginError] = useState("");

  const { control, errors, handleSubmit } = useForm<FormLoginInputs>({
    resolver: yupResolver(loginFormSchema),
  });

  const onLoginFormSubmit = (data: FormLoginInputs) => {
    setFormLoginError("");
    setLoadingAtomState({ isInProgress: true });

    authenticationService.login(data.email, data.password).then(
      (user: StateUser) => {
        setUserAtomState(user);
        setLoadingAtomState({ isInProgress: false });
        history.push("/dashboard");
      },
      (error: string) => {
        setFormLoginError(error);
        setLoadingAtomState({ isInProgress: false });
      }
    );
  };

  return (
    <Background variation={"light"}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.goBack}>
            <Back />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column" alignContent="center">
            <Grid item xs={12}>
              <Logo variation={"light"} />
            </Grid>
            {formLoginError && (
              <Grid item xs={12}>
                <Typography
                  className={classes.formLoginError}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  {formLoginError}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Box>
                <form
                  name="formLogin"
                  onSubmit={handleSubmit(onLoginFormSubmit)}
                >
                  <FormInput
                    variant="outlined"
                    color="secondary"
                    type="text"
                    defaultValue="admin@example.com"
                    name="email"
                    label="Email"
                    placeholder="email"
                    control={control}
                    errors={errors}
                    disabled={isInProgress}
                    fullWidth
                  />
                  <FormInput
                    variant="outlined"
                    color="secondary"
                    type="password"
                    defaultValue="admin"
                    name="password"
                    label="Password"
                    placeholder="password"
                    control={control}
                    errors={errors}
                    disabled={isInProgress}
                    fullWidth
                  />
                  <FormButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    value="Login"
                    isSubmitting={isInProgress}
                    disabled={isInProgress}
                    fullWidth
                  />
                </form>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Background>
  );
};

export default memo(Login);
