import React, { useState, useEffect } from "react";
import SignUpPageStyles from "./SignUp.styles";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import {
  registerForm,
  registerFormDataValidation,
  registerUserType,
} from "../LandingPageData";
import CustomInput from "../../../global/components/CustomInput/CustomInput";
import axios from "axios";
import strings from "../../../global/constants/StringConstants";

const SignUp = () => {
  const classes = SignUpPageStyles;
  const checkEmailValidation = strings.emailRegex;

  const config = {
    cUrl: "https://api.countrystatecity.in/v1/countries",
    ckey: "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==",
  };
  const [registerFormData, setRegisterFormData] = useState<any>(registerForm);
  const [countries, setCountries] = useState([]);
  const [allStates, setStates] = useState([]);
  const [allCity, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(config.cUrl, {
          headers: { "X-CSCAPI-KEY": config.ckey },
        });
        setCountries(response.data);
      } catch (error) {
        console.error("Error loading countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Fetch state from API
  useEffect(() => {
    if (registerFormData?.country?.value) {
      const fetchStates = async () => {
        try {
          const response = await axios.get(
            `${config.cUrl}/${registerFormData.country.value}/states`,
            {
              headers: { "X-CSCAPI-KEY": config.ckey },
            }
          );
          setStates(response.data);
          setCities([]);
        } catch (error) {
          console.error("Error loading states:", error);
        }
      };

      fetchStates();
    }
  }, [registerFormData?.country?.value]);

  // fetch city
  useEffect(() => {
    if (registerFormData?.country?.value && registerFormData?.state?.value) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(
            `${config.cUrl}/${registerFormData.country.value}/states/${registerFormData.state.value}/cities`,
            {
              headers: { "X-CSCAPI-KEY": config.ckey },
            }
          );
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          setCities(response.data);
        } catch (error) {
          console.error("Error loading cities:", error);
        }
      };

      fetchCities();
    }
  }, [registerFormData?.country?.value, registerFormData?.state?.value]);

  // all input box onChange method
  const handleRegisterFormOnchange = (event: React.ChangeEvent<any>) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: {
        ...registerFormData[event.target.name],
        value: event.target?.value,
        error: "",
      },
    });
  };

  const handleValidation = () => {
    const { isValid, errors } = registerFormDataValidation(registerFormData);
    setRegisterFormData({ ...errors });
    return isValid;
  };
  // register or sign up method
  const signUpHandler = async () => {
    if (handleValidation()) {
      setLoading(true);
      alert("Register Successfully");
      const newData = {
        email: registerFormData?.email?.value,
        password: registerFormData?.password?.value,
      };
      const existingData = localStorage.getItem("registerDetails");
      const dataArray = existingData ? JSON.parse(existingData) : [];
      dataArray.push(newData);
      localStorage.setItem("registerDetails", JSON.stringify(dataArray));
      setRegisterFormData([]);
      setLoading(false);
    }
  };

  const getAllInputBox = () => {
    return (
      <>
        <Grid container mt={1} spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <CustomInput
              required
              label={"First Name"}
              placeHolder={"First Name"}
              value={registerFormData?.firstName?.value}
              onChange={handleRegisterFormOnchange}
              type={"text"}
              name={"firstName"}
            />
            {!registerFormData?.firstName?.value &&
              registerFormData?.firstName?.error && (
                <FormHelperText error>
                  {registerFormData?.firstName?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            {" "}
            <CustomInput
              label={"Last Name"}
              placeHolder={"Last Name"}
              value={registerFormData?.lastName?.value}
              onChange={handleRegisterFormOnchange}
              type={"text"}
              name={"lastName"}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {" "}
            <CustomInput
              required
              label={"Email"}
              placeHolder={"Email"}
              value={registerFormData?.email?.value}
              onChange={handleRegisterFormOnchange}
              type={"email"}
              name={"email"}
            />
            {!registerFormData?.email?.value &&
              registerFormData?.email?.error && (
                <FormHelperText error>
                  {registerFormData?.email?.error}
                </FormHelperText>
              )}
            {!checkEmailValidation.test(registerFormData?.email?.value) &&
              registerFormData?.email?.value.length > 0 && (
                <FormHelperText error>
                  Please enter valid email id
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {" "}
            <CustomInput
              required
              label={"Address"}
              placeHolder={"Address"}
              value={registerFormData?.address?.value}
              onChange={handleRegisterFormOnchange}
              type={"text"}
              name={"address"}
            />
            {!registerFormData?.address?.value &&
              registerFormData?.address?.error && (
                <FormHelperText error>
                  {registerFormData?.address?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography variant="subtitle2" sx={classes.nameField}>
              Country
              <Typography component={"span"} sx={{ color: "red" }}>
                *
              </Typography>
            </Typography>
            <select
              name="country"
              id="country"
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: "6px",
              }}
              onChange={handleRegisterFormOnchange}
            >
              <option value="">Select Country</option>
              {countries?.map((items: any) => {
                return (
                  <>
                    <option key={items.id} value={items.iso2}>
                      {items?.name}
                    </option>
                  </>
                );
              })}
            </select>
            {!registerFormData?.country?.value &&
              registerFormData?.country?.error && (
                <FormHelperText error>
                  {registerFormData?.country?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography variant="subtitle2" sx={classes.nameField}>
              State
              <Typography component={"span"} sx={{ color: "red" }}>
                *
              </Typography>
            </Typography>
            <select
              name="state"
              onChange={handleRegisterFormOnchange}
              id="state"
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: "6px",
              }}
            >
              <option value="">Select State</option>
              {allStates?.map((items: any) => {
                return (
                  <>
                    <option key={items.id} value={items.iso2}>
                      {items?.name}
                    </option>
                  </>
                );
              })}
            </select>
            {!registerFormData?.state?.value &&
              registerFormData?.state?.error && (
                <FormHelperText error>
                  {registerFormData?.state?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Typography variant="subtitle2" sx={classes.nameField}>
              City
              <Typography component={"span"} sx={{ color: "red" }}>
                *
              </Typography>
            </Typography>
            <select
              onChange={handleRegisterFormOnchange}
              name="city"
              id="city"
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: "6px",
              }}
            >
              <option value="">Select City</option>
              {allCity?.map((items: any) => {
                return (
                  <>
                    <option key={items.id} value={items.iso2}>
                      {items?.name}
                    </option>
                  </>
                );
              })}
            </select>
            {!registerFormData?.city?.value &&
              registerFormData?.city?.error && (
                <FormHelperText error>
                  {registerFormData?.city?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <CustomInput
              required
              label={"Pincode"}
              placeHolder={"Pin Code"}
              value={registerFormData.pinCode.value}
              onChange={handleRegisterFormOnchange}
              type={"number"}
              name={"pinCode"}
            />
            {!registerFormData?.pinCode?.value &&
              registerFormData?.pinCode?.error && (
                <FormHelperText error>
                  {registerFormData?.pinCode?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CustomInput
              required
              label={"Mobile Number"}
              placeHolder={"Mobile Numbber"}
              value={registerFormData.mobileNumber.value}
              onChange={handleRegisterFormOnchange}
              type={"number"}
              name={"mobileNumber"}
            />
            {!registerFormData?.mobileNumber?.value &&
              registerFormData?.mobileNumber?.error && (
                <FormHelperText error>
                  {registerFormData?.mobileNumber?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <CustomInput
              label={"Fax"}
              placeHolder={"Fax"}
              value={registerFormData?.fax?.value}
              onChange={handleRegisterFormOnchange}
              type={"number"}
              name={"fax"}
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            {" "}
            <CustomInput
              label={"Phone"}
              placeHolder={"Phone"}
              value={registerFormData?.phone?.value}
              onChange={handleRegisterFormOnchange}
              type={"number"}
              name={"phone"}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {" "}
            <CustomInput
              required
              label={"Password"}
              placeHolder={"Password"}
              value={registerFormData?.password?.value}
              onChange={handleRegisterFormOnchange}
              type={"password"}
              name={"password"}
            />
            {!registerFormData?.password?.value &&
              registerFormData?.password?.error && (
                <FormHelperText error>
                  {registerFormData?.password?.error}
                </FormHelperText>
              )}
            {registerFormData?.password?.value?.length > 0 &&
              registerFormData?.password?.error && (
                <FormHelperText error>
                  {registerFormData?.password?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {" "}
            <CustomInput
              required
              label={"Confirm Password"}
              placeHolder={"Confirm Password"}
              value={registerFormData?.confirmPassword?.value}
              onChange={handleRegisterFormOnchange}
              type={"password"}
              name={"confirmPassword"}
            />
            {!registerFormData?.confirmPassword?.value &&
              registerFormData?.confirmPassword?.error && (
                <FormHelperText error>
                  {registerFormData?.confirmPassword?.error}
                </FormHelperText>
              )}
            {registerFormData?.confirmPassword?.value?.length > 0 &&
              registerFormData?.confirmPassword?.error && (
                <FormHelperText error>
                  {registerFormData?.confirmPassword?.error}
                </FormHelperText>
              )}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            {" "}
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={signUpHandler}
            >
              {loading ? "Loading..." : "Sign Up"}
            </Button>
          </Grid>
        </Grid>
      </>
    );
  };
  const getRegisterForm = () => {
    return (
      <>
        <Box>
          <Typography variant="subtitle2" sx={classes.textStyle}>
            Individual/Enterprise/Governments{" "}
            <Typography component={"span"} sx={{ color: "red" }}>
              *
            </Typography>
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Individual"
              name="registerType"
              sx={{ flexDirection: "row" }}
              value={registerFormData?.registerType?.value}
              onChange={handleRegisterFormOnchange}
            >
              {registerUserType.map((items: any, index: number) => {
                return (
                  <>
                    <FormControlLabel
                      key={index}
                      value={items}
                      control={<Radio />}
                      label={items}
                    />
                  </>
                );
              })}
            </RadioGroup>
          </FormControl>
          {getAllInputBox()}
        </Box>
      </>
    );
  };
  return (
    <>
      <Box pt={1} pb={2}>
        {getRegisterForm()}
      </Box>
    </>
  );
};
export default React.memo(SignUp);
