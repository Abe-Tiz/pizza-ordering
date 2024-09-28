import { Box, Typography, Avatar, Grid } from "@mui/material";
import React from "react";

const RelatedOrderCard = ({ pizza }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        // padding: 2,
        borderRadius: 3,
              justifyContent: "center",
        alignItems:"center"
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
        {" "}
        <Avatar
          src={pizza.image}
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
    </Box>
  );
};

export default RelatedOrderCard;
