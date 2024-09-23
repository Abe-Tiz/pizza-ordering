import { Box, Button as MuiButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ title, onClick }) => {
  return (
    <Box>
      <NavLink
        color="inherit"
        style={{
          backgroundColor: "#FF890F",
          color: "white",
          padding: "5px 15px",
        }}
      >
        {title}
      </NavLink>
    </Box>
  );
};

export default Button;
