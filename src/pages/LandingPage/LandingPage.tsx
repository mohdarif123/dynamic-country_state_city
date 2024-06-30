import React, { memo, useState } from "react";
import { Box, Grid } from "@mui/material";
import LandingPageStyles from "./LandingPage.styles";
import cyberSecurity from "../../assets/images/cyber-security.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { allTabs } from "./LandingPageData";
import SignUp from "./SignUp/SignUp";
import { useNavigate } from 'react-router-dom';
import Login from "./Login/Login";
import ForgotPage from "./ForgotPage/ForgotPage";
import { useLocation } from "react-router-dom";
import strings from "../../global/constants/StringConstants";

interface CustomProps {
  location?: Location;
}

const LandingPage = (props: CustomProps) => {
  const classes = LandingPageStyles;
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split("/")[1].toLowerCase();
  const [tabData, setTabData] = useState(currentPath || "signup");

  const handleTabClick = (tabValue: string) => {
    setTabData(tabValue);
    navigate(`/${tabValue}`);
  };

  const getComponentBasedOnURL = () => {
    switch (currentPath) {
      case strings.SIGN_UP:
        return <SignUp />;
      case strings.LOGIN:
        return <Login />;
      default:
        return <SignUp />;
    }
  };

  return (
    <>
      <Box>
        {/* <Box sx={classes.headerSection}></Box> */}
        <Grid container spacing={2} sx={classes.mainContainer}>
          <Grid item xl={6} lg={6} md={6} sm={6}>
            {" "}
            <Box sx={classes.imageContainer}>
              <img
                src={cyberSecurity}
                alt={"cyber_security"}
                style={{ maxWidth: "100%", height: "calc(100vh - 35px)" }}
              />
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12} mt={1}>
            {" "}
            <Box sx={classes.tabWrapper}>
              <Tabs
                sx={{
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                {allTabs.map((tab: any, index: number) => (
                  <Tab
                    key={index}
                    label={tab.label}
                    value={tabData}
                    onClick={() => handleTabClick(tab.value)}
                    sx={{
                      backgroundColor:
                        tabData === tab.value ? "#4FFFB0" : "inherit",
                      color:
                        tabData === tab.value ? "white !important" : "inherit",
                      borderRadius: tabData === tab.value ? "40px" : 0,
                      width: "50%",
                      height: "35px",
                      minHeight: "35px",
                      padding: 0,
                      margin: 0,
                      transition: "0.50s ease-out",
                    }}
                  />
                ))}
              </Tabs>
            </Box>
            {getComponentBasedOnURL()}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default memo(LandingPage);
