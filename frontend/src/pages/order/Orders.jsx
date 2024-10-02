import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderRequest } from "../../redux/orderSlice";
import OrderedHistoryCard from '../../components/OrderedHistoryCard';

const PopularPizza = () => {
  const dispatch = useDispatch();
  const {order,error,loading} = useSelector((state) => state.order)

  useEffect(() => {
     dispatch(fetchOrderRequest());
  }, [dispatch])
  
  console.log("order:", order)
  

  const pizzaData = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Margherita",
      toppings: ["Cheese", "Tomato"],
      price: 120,
      status: "ordered",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      status: "ordered",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      status: "recieved",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      status: "recieved",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      status: "ordered",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      status: "recieved",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #FEF2E6, #fde7d0,#FEF2E6)",
        padding: "9em 40px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "gray",
          marginBottom: "1.5rem",
        }}
      >
        Order History
      </Typography>
      <Grid container spacing={2}>
        {Array.isArray(order) &&
           order.map((pizza) => (
            <Grid item xs={12} sm={6} md={4} key={pizza.id}>
              <OrderedHistoryCard pizza={pizza} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default PopularPizza;
