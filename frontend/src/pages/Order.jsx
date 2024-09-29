import React from "react";
import {
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import pizzaImage from "../assets/images/pizza-featured.png";
import MenuItemCard from "../components/MenuItemCard";
import RelatedOrderCard from "../components/RelatedOrderCard";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const pizza = location.state?.pizza; 

  console.log("pizza:",pizza)

  const imageUrl = pizza.photo
    ? `http://localhost:4000/${pizza.photo.replace(/\\/g, "/")}`
    : "http://localhost:4000/uploads/placeholder.png";

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
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFF8F1",
        height: "100vh",
        width: "100vw",
        display: "flex",
        padding: 2,
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFF8F1",
          display: "flex",
          padding: 2,
          justifyContent: "center",
          width: "full",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        <Box sx={{ display: "flex", gap: 5 }}>
          {/*large images */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "190px",
              height: "180px",
              backgroundColor: "#FBE0C1",
              borderRadius: 50,
            }}
          >
            <Avatar
              src={imageUrl}
              sx={{ width: "85%", height: "95%", alignSelf: "center" }}
            />
          </Box>

          {/* right images */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "100px",
                backgroundColor: "#999898",
                borderRadius: 50,
              }}
            >
              <Avatar
                src={imageUrl}
                sx={{ width: "85%", height: "95%", alignSelf: "center" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "100px",
                backgroundColor: "#999898",
                borderRadius: 50,
              }}
            >
              <Avatar
                src={imageUrl}
                sx={{ width: "85%", height: "95%", alignSelf: "center" }}
              />
            </Box>
          </Box>
        </Box>

        <MenuItemCard menuItem={pizza} />
      </Box>

      {/*  RELATED  CUSTOMER OREDERS  */}
      <Box
        sx={{
          background: "#FFF8F1",
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
          Related
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
            height: 500,
          }}
        >
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "10px" }}>
            {Array.isArray(pizzaData) &&
              pizzaData.map((pizza, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "300px",
                    height: "200px",
                    flexShrink: 0,
                  }}
                >
                  <RelatedOrderCard pizza={pizza} />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
