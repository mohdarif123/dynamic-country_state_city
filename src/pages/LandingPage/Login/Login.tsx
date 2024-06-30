import React, { memo, useEffect, useState } from "react";
import LoginPageStyles from "./Login.styles";
import { Box, Button, FormHelperText, Grid, Typography } from "@mui/material";
import CustomInput from "../../../global/components/CustomInput/CustomInput";
import {
  loginFormDataValidation,
  loginFormInputData,
} from "../LandingPageData";
import { useNavigate } from "react-router-dom";
import strings from "../../../global/constants/StringConstants";
import urls from "../../../global/constants/UrlConstants";

const Login = () => {
  const classes = LoginPageStyles;
  const navigate = useNavigate();
  const checkEmailValidation = strings.emailRegex;
  const [loginFormData, setLoginFormData] = useState<any>(loginFormInputData);

  // all input box onChange method
  const handleLoginFormOnchange = (event: React.ChangeEvent<any>) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: {
        ...loginFormData[event.target.name],
        value: event.target?.value,
        error: "",
      },
    });
  };

  const handleLoginValidation = () => {
    const { isValid, errors } = loginFormDataValidation(loginFormData);
    setLoginFormData({ ...errors });
    return isValid;
  };
  // login method
  const loginHandler = async () => {
    if (handleLoginValidation()) {
      alert("Login Successfully");
      setLoginFormData([]);
      navigate(urls.PRODUCT_VIEW_PATH);
    }
  };

  const handleForgotPasword = () => {
    navigate(urls.FORGOT_PASSWORD_VIEW_PATH);
  };

  const getLoginForm = () => {
    return (
      <>
        <Grid container mt={1} spacing={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CustomInput
              required
              label={"Email"}
              placeHolder={"Email id"}
              value={loginFormData?.email?.value}
              onChange={handleLoginFormOnchange}
              type={"email"}
              name={"email"}
            />
            {!loginFormData?.email?.value && loginFormData?.email?.error && (
              <FormHelperText error>
                {loginFormData?.email?.error}
              </FormHelperText>
            )}
            {!checkEmailValidation.test(loginFormData?.email?.value) &&
              loginFormData?.email?.value?.length > 0 && (
                <FormHelperText error>
                  Please enter valid email id
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CustomInput
              required
              label={"Password"}
              placeHolder={"Password"}
              value={loginFormData?.password?.value}
              onChange={handleLoginFormOnchange}
              type={"password"}
              name={"password"}
            />
            {!loginFormData?.password?.value &&
              loginFormData?.password?.error && (
                <FormHelperText error>
                  {loginFormData?.password?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={classes.forgotPasswordWrapper}
          >
            <Typography
              sx={classes.forgotTextStyle}
              onClick={handleForgotPasword}
            >
              Forgot Password
            </Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {" "}
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={loginHandler}
            >
              Log Me In
            </Button>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Box pt={1} pb={2}>
        {getLoginForm()}
      </Box>
    </>
  );
};
export default memo(Login);
