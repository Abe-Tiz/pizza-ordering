import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import PizzaCard from "./PizzaCard";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchMenuRequest } from "../redux/menuSlice";
import { FetchRestaurantRequest } from "../redux/userSlice";

const PopularPizza = () => {
  const dispatch = useDispatch()
   const { menu} = useSelector((state) => state.menu);
  const { user } = useSelector((state) => state.user);
  console.log("menu:",menu)

   useEffect(() => {
     dispatch(fetchMenuRequest());
     dispatch(FetchRestaurantRequest());
   }, [dispatch]);
    
return (
  <Box
    sx={{
      background: "linear-gradient(to bottom, #FEF2E6, #fde7d0,#FEF2E6)",
      padding: "5em 40px",
    }}
  >
    <Typography
      variant="h3"
      sx={{
        color: "gray",
        marginBottom: "1.5rem",
      }}
    >
      Popular Pizzas
    </Typography>
    <Grid container spacing={2}>
      {Array.isArray(menu) &&
        menu.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            <PizzaCard pizza={pizza} user={user} />
          </Grid>
        ))}
    </Grid>
  </Box>
);
};

export default PopularPizza;
