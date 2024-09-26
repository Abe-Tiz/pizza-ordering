import { Box, Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import pizzaLogo from "../../assets/images/pizza-logo.png";

const AdminSider = () => {
  return (
    <Box
      sx={{
        // padding: 4,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 3,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography variant="h6">PIZZA</Typography>
        <Typography variant="h6">Icon</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFF8F2",
          display: "flex",
          // alignItems: "center",
          // padding: 15,
        }}
      >
        <img
          src={pizzaLogo}
          alt="Pizza Logo"
          style={{ width: 100, height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 4,
        }}
      >
        <NavLink style={{ padding: ".1em 2em" }} to="">
          Orders
        </NavLink>
        <NavLink style={{ padding: ".1em 2em" }} to="">
          Add menu
        </NavLink>
        <NavLink style={{ padding: ".1em 2em" }}  to="">
          Role
        </NavLink>
        <NavLink style={{ padding: ".1em 2em" }} to="">
          User
        </NavLink>
        <NavLink style={{ padding: "2em 2em" }} to="">
          Logout
        </NavLink>
      </Box>
    </Box>
  );
};

export default AdminSider
