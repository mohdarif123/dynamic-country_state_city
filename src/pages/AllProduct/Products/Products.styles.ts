import { height, maxHeight, minHeight, width } from "@mui/system";
import { cursorTo } from "readline";

const ProductsStylePage = {
  mainWrapper: {
    width: "100%",
  },
  headerWrapper: {
    width: "100%",
    minHeight: "60px",
    maxHeight: "70px",
    position:"fixed",
    left:0,
    right:0,
    top:0,
    boxShadow:
      " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  },
  allClothsWrapper: {
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    padding: "16px",
    margin: "8px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
    minHeight: "440px",
    maxHeight: "500px",
  },
  titleStyle: {
    marginTop: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    textAlign: "start",
    minHeight: "50px",
    maxHeight: "50px",
  },
  categoryStyle: {
    fontSize: "14px",
    color: "#757575",
    textAlign: "start",
    minHeight: "30px",
    maxHeight: "30px",
  },
  rateStyle: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#ff5722",
    marginTop: "8px",
    textAlign: "start",
    minHeight: "30px",
    maxHeight: "30px",
  },
  iconMainWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "start",
  },
  addSubtractIconWrapper: {
    borderRadius: "7px",
    border: "1px solid gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35px",
    width: "35px",
  },
  disabledButton: {
    background: "gray",
    borderRadius: "7px",
    border: "1px solid gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "35px",
    width: "35px",
    cursor: "not-allowed",
  },
} as const;

export default ProductsStylePage;
