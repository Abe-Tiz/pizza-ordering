import { Box, Typography, Avatar, Grid } from "@mui/material";
import React from "react";
import Button from './Button';

const PizzaCard = ({ pizza }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        borderRadius: 3,
        // boxShadow: 3,
        flex: "start",
      }}
    >
      <Avatar
        src={pizza.image}
        sx={{ width: "75%", height: 1, alignSelf: "center", mb: 2 }}
      />

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
          // padding: 2,
          flex: "start",
          borderBottom: 1,
          borderBottomColor: "gray",
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
        {/* <Button variant="contained" sx={{ backgroundColor: "#FF8100", mt: 2 }}>
          Order
        </Button> */}
        <Box>
          <Button title="Order" />
        </Box>
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
          {pizza.ownerName}
        </Typography>
      </Box>
    </Box>
  );
};

export default PizzaCard;
