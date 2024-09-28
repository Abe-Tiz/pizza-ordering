import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
 import Button from "./Button";

const PizzaCard = ({ pizza,user}) => {
  console.log("users:",user);
  // const imageUrl = `http://localhost:4000/${pizza.photo.replace(/\\/g, "/")}`; 

   const imageUrl = pizza.photo
     ? `http://localhost:4000/${pizza.photo.replace(/\\/g, "/")}`
     : "http://localhost:4000/uploads/placeholder.png";
  
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        borderRadius: 3,
      }}
    >
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
          sx={{ width: "85%", height: "85%", alignSelf: "center" }}
        />
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", color: "#000000", fontWeight: "bold" }}
        >
          {pizza.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", color: "#404040" }}
        >
          {pizza.toppings.join(", ")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: 1,
          borderBottomColor: "gray",
          padding:2
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", mt: 1, color: "#01C550", fontSize: 25 }}
        >
          {pizza.price}{" "}
          <Typography
            variant="body2"
            component="span"
            sx={{ verticalAlign: "super", fontSize: "0.8rem", color: "#000" }}
          >
            Birr
          </Typography>
        </Typography>
        {/* <Box> */}
          <Button title="Order" path="/register" />
        {/* </Box> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          padding: 2,
          justifyContent: "space-between",
        }}
      >
        <Avatar src={pizza.ownerImage} sx={{ width: 34, height: 34, mr: 1 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#404040", fontWeight: "bold", fontSize: 20 }}
        >
          {pizza.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default PizzaCard;
