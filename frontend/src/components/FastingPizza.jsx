import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import PizzaCard from "./PizzaCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuRequest } from "../redux/menuSlice";

const FastingPizza = () => {

    const dispatch = useDispatch();
    const { menu, loading, error } = useSelector((state) => state.menu);

    useEffect(() => {
      dispatch(fetchMenuRequest());
    }, [dispatch]);
  
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

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          width: "100%",
          height:500
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "10px" }}>
          {Array.isArray(menu) &&
            menu.map((pizza, index) => (
              <Box
                key={index}
                sx={{
                  width: "500px",
                  height: "200px",
                  flexShrink: 0,
                }}
              >
                <PizzaCard pizza={pizza} />
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FastingPizza;
