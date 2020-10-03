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
  const { isInProgress } = useRecoilValue(loadingAtom);

  const [, setLoadingAtomState] = useRecoilState<StateLoading>(loadingAtom);

  const [formLoginError, setFormLoginError] = useState("");
  // const [formLoginIsSubmitting, setFormLoginIsSubmitting] = useState(false);

  const { control, errors, handleSubmit } = useForm<FormLoginInputs>({
    resolver: yupResolver(loginFormSchema),
  });

  const onLoginFormSubmit = (data: any) => {
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
                    type="text"
                    name="email"
                    label="Email"
                    placeholder="email"
                    variant="outlined"
                    defaultValue="admin@example.com"
                    control={control}
                    errors={errors}
                    disabled={isInProgress}
                    fullWidth
                  />
                  <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="password"
                    variant="outlined"
                    defaultValue="admin"
                    control={control}
                    errors={errors}
                    disabled={isInProgress}
                    fullWidth
                  />
                  <FormButton
                    variant="contained"
                    color="primary"
                    value="Login"
                    type="submit"
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
