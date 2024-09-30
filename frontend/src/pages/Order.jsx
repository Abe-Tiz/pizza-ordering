import React, { useEffect, useState } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import MenuItemCard from "../components/MenuItemCard";
import RelatedOrderCard from "../components/RelatedOrderCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecificOrderRequest } from "../redux/orderSlice";

const Order = () => {
  const [pizza, setPizza] = useState(null);
  const dispatch = useDispatch();
  const { order, error, loading } = useSelector((state) => state.order);
  console.log("order selector:",order)

  useEffect(() => {
    const logedinCustomer = localStorage.getItem("customer-data")
      ? JSON.parse(localStorage.getItem("customer-data"))
      : null;

    if (logedinCustomer) {
      dispatch(fetchSpecificOrderRequest(logedinCustomer.id));
    }
    const storedPizza = JSON.parse(localStorage.getItem("pizza-data"));
    if (storedPizza) {
      setPizza(storedPizza);
    }
  }, [dispatch]);

  // console.log("pizza order:", pizza);

  // Check if pizza is loaded before accessing its properties
  const imageUrl = pizza?.photo
    ? `http://localhost:4000/${pizza.photo.replace(/\\/g, "/")}`
    : "http://localhost:4000/uploads/placeholder.png";

  // Sample related pizza data
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
    // Add more sample data as needed
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
          {/* Large image */}
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
          {/* Right images */}
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
        {pizza && <MenuItemCard menuItem={pizza} />}{" "}
        {/* Pass pizza data if available */}
      </Box>
      {/* RELATED CUSTOMER ORDERS */}
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
          Customer Related Orders
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
              order.map((relatedPizza, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "300px",
                    height: "200px",
                    flexShrink: 0,
                  }}
                >
                  <RelatedOrderCard pizza={relatedPizza} />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
