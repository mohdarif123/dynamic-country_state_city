const LandingPageStyles = {
  headerSection: {
    background: "blue",
    width: "100%",
    height: "35px",
  },
  mainContainer: {
    padding: "0 50px",
    height: "calc(100vh - 35px)",
  },
  imageContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "inherit",
    float: "left",
    border: "none",
    outline: "none",
    cursor: "pointer",
    padding: "14px 16px",
    transition: "0.3s",
    fontSize: "17px",
  },
  tabWrapper: {
    height: "35px",
    minHeight: "35px",
    borderRadius: "40px",
    boxShadow:
      " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  },
} as const;

export default LandingPageStyles;
