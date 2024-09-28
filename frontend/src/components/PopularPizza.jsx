import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import PizzaCard from "./PizzaCard";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchMenuRequest } from "../redux/menuSlice";
import { FetchRestaurantRequest } from "../redux/userSlice";

const PopularPizza = () => {
  const dispatch = useDispatch()
   const { menu, loading, error } = useSelector((state) => state.menu);
   const { user } = useSelector((state) => state.user);

   useEffect(() => {
     dispatch(fetchMenuRequest());
     dispatch(FetchRestaurantRequest());
   }, [dispatch]);
  
 
// console.log("user:",user)
  //  if (loading) return <div>Loading...</div>;
  //  if (error) return <div>Error: {error}</div>;


    const pizzaData = [
      {
        id: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
        name: "Margherita",
        toppings: ["Cheese", "Tomato"],
        price: 120,
        ownerImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
        ownerName: "John Doe",
      },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
        name: "Pepperoni",
        toppings: ["Pepperoni", "Cheese"],
        price: 150,
        ownerImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
        ownerName: "Jane Smith",
      },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
        name: "Pepperoni",
        toppings: ["Pepperoni", "Cheese"],
        price: 150,
        ownerImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
        ownerName: "Jane Smith",
      },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
        name: "Pepperoni",
        toppings: ["Pepperoni", "Cheese"],
        price: 150,
        ownerImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
        ownerName: "Jane Smith",
      },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
        name: "Pepperoni",
        toppings: ["Pepperoni", "Cheese"],
        price: 150,
        ownerImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
        ownerName: "Jane Smith",
      },
      {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
        name: "Pepperoni",
        toppings: ["Pepperoni", "Cheese"],
        price: 150,
        ownerImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
        ownerName: "Jane Smith",
      },
    ];
    
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
