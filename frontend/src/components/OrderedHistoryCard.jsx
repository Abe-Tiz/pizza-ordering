import { Box, Typography, Avatar, Grid } from "@mui/material";
import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const OrderedHistoryCard = ({ pizza }) => {
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
        <NavLink
          to="/register"
          color="inherit"
          style={{
            backgroundColor: "transparent",
            color: pizza.status === "ordered" ? "#ee8924" : "#108840",
            padding: "10px 25px",
            width: "6rem",
            borderRadius: "15px",
          }}
        >
          {pizza.status}
        </NavLink>
        {/* <Box>
          <Button title={pizza.status} />
        </Box> */}
      </Box>
    </Box>
  );
};

export default OrderedHistoryCard;
