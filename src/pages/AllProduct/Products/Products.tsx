import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import ProductsStylePage from "./Products.styles";
import { decrement, increment } from "../../counterSlice";
// import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const Products = () => {
  const classes = ProductsStylePage;
  const dispatch = useDispatch();
  const productCount = useSelector((state: any) => state.counter.value);
  const apiurl = "https://fakestoreapi.com/products";
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(apiurl);
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleAddToCart = (cardItem: any) => {
    dispatch(increment());
  };
  const handleRemoveFromCart = (cardItem: any) => {
    if (productCount !== 0) dispatch(decrement());
  };
  const getAllClothItems = () => {
    return (
      <>
        {allProducts?.map((items: any, index: number) => {
          return (
            <Grid item xl={2.5} lg={3} md={4} sm={6} xs={12} key={items?.id}>
              <Box sx={classes.allClothsWrapper}>
                <img
                  src={items?.image}
                  alt={"cloth image"}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Typography variant={"subtitle2"} sx={classes.titleStyle}>
                  {items?.title?.substr(0, 40)}
                </Typography>

                <Typography variant={"subtitle1"} sx={classes.categoryStyle}>
                  {items?.category}
                </Typography>
                <Typography variant={"subtitle2"} sx={classes.rateStyle}>
                  Rs {items?.price}
                </Typography>
                <Box sx={classes.iconMainWrapper}>
                  <Box
                    sx={
                      productCount === 0
                        ? classes.disabledButton
                        : classes.addSubtractIconWrapper
                    }
                    onClick={() => handleRemoveFromCart(items)}
                  >
                    <Typography sx={{ fontSize: "30px", fontWeight: 600 }}>
                      -
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      ...classes.addSubtractIconWrapper,
                      background: "#f7ca00",
                    }}
                    onClick={() => handleAddToCart(items)}
                  >
                    <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
                      +
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </>
    );
  };

  const getHeader = () => {
    return (
      <>
        <Box mx={10}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "green", fontWeight: 600, fontSize: "20px" }}
            >
              SHOP
              <Typography
                component={"span"}
                sx={{ color: "black", fontWeight: 600, fontSize: "20px" }}
              >
                LANE
              </Typography>
            </Typography>
            <Box>
              <h1>middle</h1>
            </Box>
            <Box>
              {/* <AddBusinessIcon /> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px",
                  height: "25px",
                  width: "25px",
                  background: "green",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  {productCount}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  return (
    <>
      <Box sx={classes.mainWrapper}>
        <Box sx={classes.headerWrapper}>{getHeader()}</Box>
        <Box px={3} pb={2} pt={10}>
          <Typography variant="h5">Clothing for men and women</Typography>
        </Box>
        <Grid container spacing={2} px={6}>
          {getAllClothItems()}
        </Grid>
      </Box>
    </>
  );
};

export default memo(Products);
