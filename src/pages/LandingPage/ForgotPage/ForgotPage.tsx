import React, { memo } from "react";
import ForgotPageStyles from "./Forgot.styles";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../global/components/CustomInput/CustomInput";
import urls from "../../../global/constants/UrlConstants";
const ForgotPage = () => {
  const classes = ForgotPageStyles;
  const navigate = useNavigate();

  const handleBackToSignUp = () => {
    navigate(urls.SIGN_UP_VIEW_PATH);
  };
  return (
    <>
      <Box sx={classes.mainWrapper} pt={1} pb={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Centers vertically
            height: "100vh", // Ensure the outer box takes the full viewport height
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              background: "white",
              boxShadow:
                " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
            p={3}
          >
            <Typography variant="subtitle1" sx={classes.textStyle}>
              Please Provide Your Registered email id to Reset Password
            </Typography>
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <CustomInput
                  required
                  label={"Email"}
                  placeHolder={"Email"}
                  value={""}
                  onChange={{}}
                  type={"email"}
                  name={"email"}
                />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Button variant="contained" sx={{ width: "100%" }}>
                  Reset Password
                </Button>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  onClick={handleBackToSignUp}
                >
                  Login/Signup
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default memo(ForgotPage);
