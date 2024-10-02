import React, { useEffect, useState } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import MenuItemCard from "../components/MenuItemCard";
import RelatedOrderCard from "../components/RelatedOrderCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecificOrderRequest } from "../redux/orderSlice";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [pizza, setPizza] = useState(null);
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);
  const navigate = useNavigate();

  useEffect(() => {
    const logedinCustomer = localStorage.getItem("logedin-data");
    if (logedinCustomer) {
      dispatch(fetchSpecificOrderRequest({customer_id:logedinCustomer}));
    }

    const storedPizza = JSON.parse(localStorage.getItem("pizza-data"));
    if (storedPizza) {
      setPizza(storedPizza);
    }

    const logoutTimer = setTimeout(() => {
      localStorage.removeItem("logedin-data");
      navigate("/")
    }, 120000);  
    
    return () => clearTimeout(logoutTimer);

  }, [dispatch]);
 
  // Check if pizza is loaded before accessing its properties
  const imageUrl = pizza?.photo
    ? `http://localhost:4000/${pizza.photo.replace(/\\/g, "/")}`
    : "http://localhost:4000/uploads/placeholder.png";

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
            {Array.isArray(order) &&
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
