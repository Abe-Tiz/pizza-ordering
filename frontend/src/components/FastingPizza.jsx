import { Box, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import PizzaCard from "./PizzaCard";

const FastingPizza = () => {
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      ownerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
      ownerName: "Jane Smith",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      ownerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
      ownerName: "Jane Smith",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      ownerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
      ownerName: "Jane Smith",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
      name: "Pepperoni",
      toppings: ["Pepperoni", "Cheese"],
      price: 150,
      ownerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
      ownerName: "Jane Smith",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3XIxU32blt_970vLRteGyjKpqUkt452cOc6zuIfI4SCBeWVNZU6MPV_JDL8MTzRUusw&usqp=CAU",
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
        background: "linear-gradient(to bottom, #FEF2E6, #fee5cb,#FEF2E6)",
        padding: "40px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "gray",
          marginBottom: "1.5rem",
        }}
      >
       Fasting
      </Typography>
      <Grid container spacing={2}>
        {pizzaData.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FastingPizza;
